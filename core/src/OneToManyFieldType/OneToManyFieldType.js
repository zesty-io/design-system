import React, { Component, Fragment } from "react";

import { Tag } from "../Tag";
import { Loader } from "../Loader";
import { Select, Option } from "../Select";

import styles from "./OneToManyFieldType.less";
export class OneToManyFieldType extends Component {
  constructor(props) {
    super(props);

    const tagZUIDs = this.props.value ? this.props.value.split(",") : [];

    this.state = {
      loaded: false, // Used to ensure we only load data once
      loading: false,
      tags: this.props.options.filter(option => tagZUIDs.includes(option.value))
    };
  }

  componentDidMount() {
    // if values are provided
    // load data and display proper tags
    if (this.props.value) {
      this.setState({
        loaded: true,
        loading: true
      });

      this.props.onOpen().then(() => {
        const tagZUIDs = this.props.value ? this.props.value.split(",") : [];
        this.setState({
          loading: false,
          tags: this.props.options.filter(option =>
            tagZUIDs.includes(option.value)
          )
        });
      });
    }
  }

  onClick = () => {
    if (!this.state.loaded && this.props.onOpen) {
      this.setState({
        loaded: true,
        loading: true
      });
      this.props.onOpen().then(() => {
        this.setState({
          loading: false
        });
      });
    }
  };

  onRemove = tagZUID => {
    // Exclude the removed tag from our tags array
    this.setState({
      tags: this.state.tags.filter(tag => tag.value !== tagZUID)
    });
  };

  onSelect = (name, value) => {
    if (name && value !== "0") {
      if (this.props.onChange) {
        this.props.onChange(name, value, this.props.datatype);
      }

      this.setState({
        tags: [
          ...this.state.tags,
          this.props.options.find(option => option.value === value)
        ]
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          <label>{this.props.label}</label>
        </div>
        <section className={styles.OneToMany}>
          <Select
            className={styles.Select}
            name={this.props.name}
            onClick={this.onClick}
            onSelect={this.onSelect}
            value="0" // By providing a 0 value we pre-select our "empty" option
          >
            <Option value="0" text="— Select Option —" />
            {this.state.loading && <Loader />}
            {this.props.options.map((opt, i) => {
              return <Option key={i} value={opt.value} text={opt.text} />;
            })}
          </Select>

          <article className={styles.Tags}>
            {this.state.tags.length ? (
              this.state.tags.map((item, i) => (
                <Tag key={i} onRemove={this.onRemove} value={item.value}>
                  {item.text}
                </Tag>
              ))
            ) : (
              <p>Select tags to associate them with your item.</p>
            )}
          </article>
        </section>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";

import { Tag } from "../Tag";
import { Loader } from "../Loader";
import styles from "./OneToManyFieldType.less";

import { Select, Option } from "../Select";

export class OneToManyFieldType extends Component {
  constructor(props) {
    super(props);

    const tagZUIDs = this.props.value.split(",");

    this.state = {
      loaded: false, // Used to ensure we only load data once
      loading: false,
      tags: this.props.options.filter(option => tagZUIDs.includes(option.value))
    };
  }

  componentDidMount() {
    console.log("OneToManyFieldType:componentDidMount", this.props.value);

    // if values are provided
    // load data and display proper tags
    if (this.props.value) {
      this.setState({
        loaded: true,
        loading: true
      });

      this.props.onOpen().then(() => {
        const tagZUIDs = this.props.value.split(",");
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
    // we need to alter the options array
    // and then add the tag in the state
    // how will this behave with loading?
    if (this.props.onChange) {
      this.props.onChange(name, value, this.props.datatype);
    }

    this.setState({
      tags: [
        ...this.state.tags,
        this.props.options.find(option => option.value === value)
      ]
    });
  };

  render() {
    const tagZUIDs = this.state.tags.map(tag => tag.value).join(",");
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
          >
            {this.state.loading && <Loader />}
            {this.props.options
              .filter(opt => !tagZUIDs.includes(opt.value))
              .map((opt, i) => {
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

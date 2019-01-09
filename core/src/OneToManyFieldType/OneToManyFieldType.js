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

  componentDidUpdate(prevProps) {
    // if items array has changed, check for new relationships
    if (
      Object.keys(this.props.items).length !==
      Object.keys(prevProps.items).length
    ) {
      const tagZUIDs = this.props.value ? this.props.value.split(",") : [];
      this.setState({
        loading: false,
        tags: this.props.options.filter(option =>
          tagZUIDs.includes(option.value)
        )
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

  onRemove = (name, tagZUID) => {
    // Exclude the removed tag from our tags array
    this.setState(
      {
        tags: this.state.tags.filter(tag => tag.value !== tagZUID)
      },
      () => {
        // send a csv string to update store
        if (this.props.onChange) {
          this.props.onChange(
            this.props.name,
            this.state.tags.map(tag => tag.value).join(","),
            this.props.datatype
          );
        }
      }
    );
  };

  onSelect = (name, value) => {
    const option = this.props.options.find(option => option.value === value);
    if (option && option !== "0") {
      this.setState(
        {
          tags: [...this.state.tags, option]
        },
        () => {
          // send a csv string to update store
          if (this.props.onChange) {
            this.props.onChange(
              this.props.name,
              this.state.tags.map(tag => tag.value).join(","),
              this.props.datatype
            );
          }
        }
      );
    } else {
      console.error(
        `OneToManyFieldType:onSelect - Unknown option selected (${value})`
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div>
          <label className={styles.OneToManyFieldTypeLabel}>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </label>
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
                <Tag
                  key={i}
                  link={
                    this.props.relatedModelZUID &&
                    `#!/content/${this.props.relatedModelZUID}/${item.value}`
                  }
                  onRemove={this.onRemove}
                  value={item.value}
                >
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

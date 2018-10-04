import React, { Component, Fragment } from "react";

import { Tag } from "../Tag";
import { Loader } from "../Loader";
import styles from "./OneToManyFieldType.less";

import { Select, Option } from "../Select";

export class OneToManyFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      tags: []
    };
  }

  componentDidMount() {
    // if values are provided
    // load data and display proper tags
    if (this.props.value) {
      const tagsToBeAdded = this.props.value.split(":")[0].split(",");
      this.props
        .onOpen()
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .then(() => {
          const tags = this.props.options.filter(option =>
            tagsToBeAdded.includes(option.value)
          );
          this.setState({ tags });
        });

      this.setState({
        loaded: true, // Only load data once
        loading: true
      });
    }
  }

  onClick = () => {
    if (!this.state.loaded && this.props.onOpen) {
      this.props.onOpen().then(() => {
        this.setState({
          loading: false
        });
      });

      this.setState({
        loaded: true, // Only load data once
        loading: true
      });
    }
  };

  onRemove = tagZUID => {
    // remove the tag ZUID from teh tags array
    // add it back into the options array
    const tags = this.state.tags.filter(tag => tag.value !== tagZUID);
    this.setState({ tags });
  };

  onSelect = evt => {
    // we need to alter the options array
    // and then add the tag in the state
    // how will this behave with loading?
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.currentTarget.dataset.value,
        this.props.datatype
      );
    }
    const tags = [
      ...this.state.tags,
      JSON.parse(evt.currentTarget.dataset.value)
    ];
    this.setState({ tags });
  };

  render() {
    const { tags, loading } = this.state;
    const { label, selection, options } = this.props;
    return (
      <Fragment>
        <div>
          <label>{label}</label>
        </div>
        <section className={styles.OneToMany}>
          <Select
            className={styles.Select}
            onClick={this.onClick}
            onSelect={this.onSelect}
            selection={selection}
            default={this.props.default}
          >
            {loading && <Loader />}
            {options
              .filter(
                option =>
                  !tags
                    .reduce((acc, item) => {
                      acc.push(item.value);
                      return acc;
                    }, [])
                    .includes(option.value)
              )
              .map((opt, i) => {
                return <Option key={i} {...opt} value={JSON.stringify(opt)} />;
              })}
          </Select>
          <article className={styles.Tags}>
            {tags.length ? (
              tags.map(tag => (
                <Tag
                  name={tag.text}
                  ZUID={tag.value}
                  onRemove={this.onRemove}
                />
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

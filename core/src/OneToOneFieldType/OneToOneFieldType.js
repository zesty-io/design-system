import React, { Component } from "react";
import { Select, Option } from "../Select";

export class OneToOneFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false
    };
  }

  render() {
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <Select
          name={this.props.name}
          onClick={this.onClick}
          onSelect={this.onSelect}
          selection={this.props.selection}
          default={this.props.default}
          name={this.props.name}
        >
          {this.state.loading && <Loader />}
          {this.props.options.map((opt, i) => {
            return <Option key={i} {...opt} />;
          })}
        </Select>
      </article>
    );
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

  onSelect = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(name, value, this.props.datatype);
    }
  };
}

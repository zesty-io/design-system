import React, { Component } from "react";
import { Select, Option } from "../Select";

export class OneToOneFieldType extends Component {
  static defaultProps = {
    options: [
      {
        text: "This field is misconfigured",
        value: ""
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false,
      selected: this.props.selected || this.props.options[0]
    };
  }

  render() {
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <Select
          onClick={this.onClick}
          onSelect={this.onSelect}
          selection={this.state.selected}
        >
          {this.state.loading && <Loader />}
          {this.props.options.map((opt, i) => {
            return <Option key={i} value={opt.value} text={opt.text} />;
          })}
        </Select>
      </article>
    );
  }

  onClick = () => {
    console.log("OneToOneFieldType:onClick", this.state, this.props);
    // Only load data once
    if (!this.state.loaded && this.props.onOpen) {
      this.setState({
        loading: true
      });

      this.props.onOpen().then(() => {
        this.setState({
          loaded: true,
          loading: false
        });
      });
    }
  };

  onSelect = evt => {
    const value = evt.currentTarget.dataset.value;
    this.setState(
      {
        selected: this.props.options.find(opt => opt.value === value)
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.props.name, value, this.props.datatype);
        }
      }
    );
  };
}

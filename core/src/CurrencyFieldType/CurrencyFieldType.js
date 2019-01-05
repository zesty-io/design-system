import React, { Component } from "react";

import { Input } from "../Input";
import { Infotip } from "../Infotip";
import { Select, Option } from "../Select";
import { currencies } from "./currencies";

import styles from "./CurrencyFieldType.less";

export class CurrencyFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "0.00",
      currency: currencies["USD"]
    };
  }

  componentDidMount() {
    if (this.props.code) {
      this.setState({ currency: currencies[this.props.code] });
    }
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  onChange = evt => {
    const value = evt.target.value;
    if (!Number(value)) {
      console.error("CurrencyFieldType: Invalid value, not a number", value);
      // TODO broadcast error
    }

    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }

    this.setState({
      value: value
    });
  };

  selectCurrency = (name, value) => {
    const currency = currencies[value];

    if (currency) {
      this.setState({ currency });
    }
  };

  render() {
    return (
      <label className={styles.CurrencyFieldType}>
        <div className={styles.CurrencyFieldTypeLabel}>
          <span>
            <Infotip
              title={`View this value in different currencies based upon your locale "${
                window.navigator.language
              }"`}
            />
            {this.props.label}
          </span>
          <span>
            {Number(this.state.value).toLocaleString(
              window.navigator.language,
              {
                style: "currency",
                currency: this.state.currency.code
              }
            )}
          </span>
        </div>
        <div className={styles.CurrencyFields}>
          <Select
            className={styles.SelectCurrency}
            onSelect={this.selectCurrency}
            value={this.state.currency.code}
            name={this.props.name}
          >
            {Object.keys(currencies).map((code, i) => {
              const currency = currencies[code];
              return (
                <Option
                  key={i}
                  value={currency.code}
                  // this ugly html allows us to display the currency symbol
                  // and in the dropdown you can still see the currency name
                  html={`<p style="display:flex;justify-content:space-between;align-items: center;">
                  <span>${
                    currency.symbol
                  }</span><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                  <span>${currency.name}<span></p>`}
                />
              );
            })}
          </Select>

          <Input
            required={this.props.required}
            className={styles.CurrencyInput}
            type="number"
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
      </label>
    );
  }
}

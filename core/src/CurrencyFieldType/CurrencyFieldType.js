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
      value: props.value || "0",
      currency: currencies[props.code || "USD"]
    };
  }
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
            selection={{
              value: this.state.currency.code,
              text: this.state.currency.symbol
            }}
            name={this.props.name}
          >
            {Object.keys(currencies).map((code, i) => {
              const currency = currencies[code];
              return (
                <Option
                  key={i}
                  value={currency.code}
                  text={`${currency.symbol}`}
                />
              );
            })}
          </Select>

          <Input
            className={styles.CurrencyInput}
            type="text"
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
      </label>
    );
  }

  onChange = evt => {
    const value = evt.target.value;

    if (!Number(value)) {
      console.log("Invalid value, not a number");
      // TODO broadcast error
    }

    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }

    this.setState({
      value: value
    });
  };

  selectCurrency = evt => {
    const code = evt.currentTarget.dataset.value;
    const currency = currencies[code];

    if (currency) {
      this.setState({ currency });
    }
  };
}

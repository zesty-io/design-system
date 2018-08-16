import React, { Component } from "react";

import { Input } from "../Input";
import { Select, Option } from "../Select";
import { currencies } from "./currencies";

import styles from "./CurrencyFieldType.less";

export class CurrencyFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: null,
      amount: "$0.00",
      inputAmount: ""
    };
  }
  componentDidMount() {
    if (this.props.default) {
      // select the default currency
      // map currencies and find the object for the default
      this.setState({
        selectedCurrency:
          currencies[
            Object.keys(currencies).filter(
              e => currencies[e].code === this.props.default
            )[0]
          ]
      });
    } else {
      // fallback default to USD
      this.setState({
        selectCurrency: {
          symbol: "$",
          name: "US Dollar",
          symbol_native: "$",
          decimal_digits: 2,
          rounding: 0,
          code: "USD",
          name_plural: "US dollars"
        }
      });
    }
  }
  render() {
    const { amount, inputAmount } = this.state;
    return (
      <React.Fragment>
        <div className={styles.CurrencyFieldTypeLabel}>
          <label>{this.props.label}</label>
          <label>{this.state.amount}</label>
        </div>
        <article className={styles.CurrencyFieldType}>
          {/* <span className={styles.Amount}>{amount}</span> */}
          {this.state.selectedCurrency && (
            <div className={styles.Overlap}>
              <Input
                className={styles.CurrencyInput}
                type="number"
                onChange={this.onChange}
                value={inputAmount}
              />
              <Select
                onSelect={this.selectCurrency}
                selection={{
                  value: JSON.stringify(this.state.selectCurrency),
                  text: this.state.selectedCurrency.symbol
                }}
                className={styles.SelectCurrency}
              >
                {Object.keys(currencies).map((curr, i) => {
                  return (
                    <Option
                      key={i}
                      value={JSON.stringify(currencies[curr])}
                      text={`${currencies[curr].symbol} | ${
                        currencies[curr].name
                      }`}
                    />
                  );
                })}
              </Select>
            </div>
          )}
        </article>
      </React.Fragment>
    );
  }

  onChange = evt => {
    // handle NaN result for empty amount
    if (!evt.target.value) {
      return this.setState({ amount: "$0.00", inputAmount: "" });
    }

    // make sure there is a dot in the number
    let withDot = evt.target.value.match(/(\.)/g)
      ? evt.target.value
      : evt.target.value + ".";

    // remove currency symbols
    withDot = withDot.match(/[-+]?[0-9]*\.?[0-9]*/g).join("");

    // use toLocaleString to format currency
    const converted = Number(withDot).toLocaleString("us-EN", {
      style: "currency",
      currency: this.state.selectedCurrency.code
    });
    this.setState({
      amount: converted,
      inputAmount: evt.target.value
    });

    if (this.props.callback) {
      this.props.callback(converted);
    }
  };

  selectCurrency = evt => {
    this.setState(
      {
        selectedCurrency: JSON.parse(evt.currentTarget.dataset.value)
      },
      () => {
        const converted = Number(this.state.inputAmount).toLocaleString(
          "us-EN",
          {
            style: "currency",
            currency: this.state.selectedCurrency.code
          }
        );
        this.setState({ amount: converted });
        if (this.props.callback) {
          this.props.callback(converted);
        }
      }
    );
  };
}

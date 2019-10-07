import React, { useState } from "react";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";
import { Select, Option } from "../Select";
import { currencies } from "./currencies";

import styles from "./FieldTypeCurrency.less";
export const FieldTypeCurrency = React.memo(function FieldTypeCurrency(props) {
  // console.log("FieldTypeCurrency:render");

  const [monetaryValue, setMonetaryValue] = useState(props.value || "0.00");
  const [currency, setCurrency] = useState(
    (props.code && currencies[props.code]) || currencies["USD"]
  );

  return (
    <label className={styles.FieldTypeCurrency}>
      <div className={styles.FieldTypeCurrencyLabel}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={`View this value in different currencies based upon your locale "${window.navigator.language}"`}
        />
        <span>
          {Number(monetaryValue).toLocaleString(window.navigator.language, {
            style: "currency",
            currency: currency.code
          })}
        </span>
      </div>

      <p className={styles.Description}>{props.description}</p>

      <div className={styles.CurrencyFields}>
        <Select
          className={styles.SelectCurrency}
          name={props.name}
          value={currency.code}
          onSelect={(name, value) => {
            setCurrency(currencies[value]);
          }}
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
                <span>${currency.symbol}</span><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>${currency.name}<span></p>`}
              />
            );
          })}
        </Select>

        <Input
          required={props.required}
          className={styles.CurrencyInput}
          type="number"
          value={monetaryValue}
          onChange={evt => {
            const value = evt.target.value;

            if (!Number(value)) {
              console.error(
                "FieldTypeCurrency: Invalid value, not a number",
                value
              );
              // TODO broadcast error
            }
            if (props.onChange) {
              props.onChange(props.name, value, props.datatype);
            }

            setMonetaryValue(value);
          }}
        />
      </div>

      <FieldDescription description={props.description} />
    </label>
  );
});

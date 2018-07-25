import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './DateTimeFieldType.less'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export class DateTimeFieldType extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment()
    }
  }
  render() {
    return (
      <article className={styles.DateFieldType}>
        <div className={styles.DateFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <DatePicker
          onChange={this.onChange}
          selected={this.state.date}
          placeholderText="Click to select a date and time"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
        />
      </article>
    )
  }

  onChange = date => {
    this.setState({
      date: date
    })
  }
}

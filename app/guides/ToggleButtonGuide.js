import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { ToggleButton } from '@zesty-io/core/dist/ToggleButton'

export class ToggleButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        <ToggleButton />
        <ToggleButton onValue="on Value" offValue="off Value" />
        <ToggleButton default={true} onChange={console.log} />
        <ToggleButton disabled={true} />
        <CodeCard header="Usage" height={250} open>
          {`<ToggleButton />
<ToggleButton onValue="on Value" offValue="off Value" />
<ToggleButton default={true} onChange={console.log} />
<ToggleButton disabled={true} />
<CodeCard header="Usage" height={250} open>`}
        </CodeCard>

        <CodeCard header="Code" height={250}>
          {`export class ToggleButton extends Component {
  state = {
    selected: this.props.default || false
  }
  render() {
    const { disabled, offValue, onValue } = this.props
    return (
      <article className={styles.ToggleButton}>
        <section
          className={'{styles.off} {
            this.state.selected === false ? styles.Selected : null
          } {disabled ? styles.disabled : null}'}
          onClick={() =>
            !disabled &&
            this.setState({ selected: false }, () => {
              if (this.props.onChange) {
                this.props.onChange(this.state.selected)
              }
            })
          }>
          <p>{offValue || 'Off'}</p>
        </section>
        <section
          className={'{styles.on} {
            this.state.selected === true ? styles.Selected : null
          } {disabled ? styles.disabled : null}'}
          onClick={() =>
            !disabled &&
            this.setState({ selected: true }, () => {
              if (this.props.onChange) {
                this.props.onChange(this.state.selected)
              }
            })
          }>
          <p>{onValue || 'On'}</p>
        </section>
      </article>
    )
  }
}`}
        </CodeCard>
      </React.Fragment>
    )
  }
}

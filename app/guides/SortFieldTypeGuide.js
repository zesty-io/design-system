import React, { Component } from 'react'

import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

import { SortFieldType } from '@zesty-io/core/dist/SortFieldType'

export class SortFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Sort Field Type for manager app</p>
        <p>Props: label, default</p>
        <br />
        <SortFieldType label="Label" callback={console.log} />
        <br />
        <SortFieldType
          label="Default to 10"
          default={10}
          callback={console.log}
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`
<SortFieldType label="Label" callback={console.log} />
<br />
<SortFieldType
  label="Default to 10"
  default={10}
  callback={console.log}
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`export class SortFieldType extends Component {
  state = {
    sortValue: Number(this.props.default) || 0,
    required: this.props.required
  }
  handleIncrement = up => {
    if (up) {
      this.setState({ sortValue: Number(this.state.sortValue) + 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue)
      })
    } else {
      this.setState({ sortValue: Number(this.state.sortValue) - 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue)
      })
    }
  }
  onChange = evt => {
    // handles a manual number entry
    if (this.props.callback) {
      this.props.callback(Number(evt.target.value))
    }
    this.setState({
      sortValue: Number(evt.target.value)
    })
  }
  render() {
    const { sortValue } = this.state
    return (
      <article className={styles.SortFieldType}>
        <section className={styles.SortFieldTypeLabel}>
          <label>{this.props.label}</label>
        </section>
        <section className={styles.Sort}>
          <span className={styles.IncrementL} onClick={() => this.handleIncrement(true)}>+</span>
          <Input className={styles.SortNumber} type="number" onChange={this.onChange} value={sortValue} />
          <span className={styles.IncrementR} onClick={() => this.handleIncrement()}>-</span>
        </section>
      </article>
    )
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}

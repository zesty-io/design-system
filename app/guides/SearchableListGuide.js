import React, { Component } from 'react'

import { SearchableList, Option } from '@zesty-io/core/dist/SearchableList'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class SearchableListGuide extends Component {
  state = { returnedData: [] }
  componentDidMount() {
    // spoof data
    const randomGen = opt =>
      Math.random()
        .toString(opt)
        .substring(7)
    const ZUIDs = new Array(500).fill('').map(i => randomGen())
    const values = new Array(500).fill('').map(i => randomGen(36))
    const spoofedData = ZUIDs.reduce((acc, el, i) => {
      acc[el] = { html: values[i], value: el }
      return acc
    }, {})
    this.setState({ spoofedData })
  }
  handleSelect = (name, value, datatype) => {
    console.log(name, value, datatype)
  }
  handleSearch = term => {
    console.log(term)
    if (term.length >= 3) {
      const returnedData = Object.keys(this.state.spoofedData)
        .filter(ZUID => {
          return (
            this.state.spoofedData[ZUID].html.includes(term) ||
            this.state.spoofedData[ZUID].value.includes(term)
          )
        })
        .map(matchedZUID => this.state.spoofedData[matchedZUID])
      console.log(returnedData)
      this.setState({ returnedData })
    }
  }
  render() {
    const { returnedData } = this.state
    return (
      <React.Fragment>
        <p>Searchable List component</p>
        <p>Props: options, label</p>
        <br />
        <SearchableList
          label="Label Field"
          name="searchableList"
          datatype="dataSearchableList"
          onSelect={this.handleSelect}
          onSearch={this.handleSearch}>
          {returnedData.map((el, i) => (
            <Option key={i} value={el.value} text={el.html} />
          ))}
        </SearchableList>
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed height="300px" code={``} />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/8a023d7a27f3a58fd75132437cc002c4ba054f90/DropDownFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}

// return searched data after three characters are returned

// onselect needs to return only a zuid

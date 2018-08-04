import React, { Component } from 'react'

import { SearchableList, Option } from '../../core/src/SearchableList'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class SearchableListGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Searchable List component</p>
        <p>Props: options, label</p>
        <br />
        <SearchableList label="Label Field">
          <Option text="option 1" value="value 1" />
          <Option text="test 2" value="test 2" />
          <Option text="able 3" value="able 3" />
          <Option text="find 4" value="find 4" />
        </SearchableList>
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="300px"
            code={`
<SearchableList label="Label Field">
  <Option text="option 1" value="value 1" />
  <Option text="option 2" value="value 2" />
  <Option text="option 3" value="value 3" />
  <Option text="option 4" value="value 4" />
</SearchableList>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/8a023d7a27f3a58fd75132437cc002c4ba054f90/DropDownFieldType.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}

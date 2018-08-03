import React, { Component } from 'react'

import { SearchableList, Option } from '../../core/src/SearchableList'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class SearchableListGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Dropdown Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <SearchableList label="Label Field">
          <Option text="option 1" value="value 1" />
        </SearchableList>
        <br />
        {/* <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="300px"
            code={`
<DropDownFieldType
  label="Label Field"
  options={[
    { value: 'a value that can be used in some way', text: 'hi' },
    { value: 'a value that can be used in some way', text: 'hello' },
    {
      value: 'a value that can be used in some way',
      text: 'buenos dias'
    },
    { value: 'a value that can be used in some way', text: 'good day' }
  ]}
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/58a6f8bbb0f89f77bef63a745b1e9570/raw/8a023d7a27f3a58fd75132437cc002c4ba054f90/DropDownFieldType.js" />
        </CollapsibleCard> */}
      </React.Fragment>
    )
  }
}

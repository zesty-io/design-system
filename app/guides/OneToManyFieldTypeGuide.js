import React, { Component } from 'react'

import { OneToManyFieldType } from '@zesty-io/core/dist/OneToManyFieldType'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class OneToManyFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>One to Many Field Type</p>
        <p>Props: options(array of objects), label</p>
        <br />
        <OneToManyFieldType
          label="label"
          options={[
            {
              name: 'hi',
              value: '9047232df',
              text: 'hi'
            },
            {
              name: 'hello',
              value: '9024225df',
              text: 'hello'
            },
            {
              name: 'buenos dias',
              value: '904252df',
              text: 'buenos dias'
            },
            {
              name: 'good day',
              value: '9074732df',
              text: 'good day'
            },
            {
              name: 'hi',
              value: '90432df',
              text: 'hi'
            },
            {
              name: 'hello',
              value: '90242df',
              text: 'hello'
            },
            {
              name: 'buenos dias',
              value: '9045277df',
              text: 'buenos dias'
            },
            {
              name: 'good day',
              value: '907422df',
              text: 'good day'
            },
            {
              name: 'hi',
              value: '90432df',
              text: 'hi'
            },
            {
              name: 'hello',
              value: '902hdfg472df',
              text: 'hello'
            },
            {
              name: 'buenos dias',
              value: '90745fdg2df',
              text: 'buenos dias'
            },
            {
              name: 'good day',
              value: '907dfg242df',
              text: 'good day'
            }
          ]}
          name="required"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed height="300px" code={`//`} />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed code={`//`} />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}

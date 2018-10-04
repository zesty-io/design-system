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
              value: 'tagname1',
              name: 'hi',
              ZUID: '9047232df',
              text: 'hi'
            },
            {
              value: 'tagname2',
              name: 'hello',
              ZUID: '9024225df',
              text: 'hello'
            },
            {
              value: 'tagname3',
              name: 'buenos dias',
              ZUID: '904252df',
              text: 'buenos dias'
            },
            {
              value: 'tagname4',
              name: 'good day',
              ZUID: '9074732df',
              text: 'good day'
            },
            {
              value: 'tagname1',
              name: 'hi',
              ZUID: '90432df',
              text: 'hi'
            },
            {
              value: 'tagname2',
              name: 'hello',
              ZUID: '90242df',
              text: 'hello'
            },
            {
              value: 'tagname3',
              name: 'buenos dias',
              ZUID: '9045277df',
              text: 'buenos dias'
            },
            {
              value: 'tagname4',
              name: 'good day',
              ZUID: '907422df',
              text: 'good day'
            },
            {
              value: 'tagname1',
              name: 'hi',
              ZUID: '90432df',
              text: 'hi'
            },
            {
              value: 'tagname2',
              name: 'hello',
              ZUID: '902hdfg472df',
              text: 'hello'
            },
            {
              value: 'tagname3',
              name: 'buenos dias',
              ZUID: '90745fdg2df',
              text: 'buenos dias'
            },
            {
              value: 'tagname4',
              name: 'good day',
              ZUID: '907dfg242df',
              text: 'good day'
            }
          ]}
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

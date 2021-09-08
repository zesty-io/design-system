import React, { Component } from 'react'

import { Button } from '@zesty-io/core/Button'
import { ButtonGroup } from '@zesty-io/core/ButtonGroup'

import { CodeCard } from '../components/CodeCard'
// import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
// import GithubEmbed from '../components/githubembed'

export class ButtonGroupGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A wrapper to group buttons</p>
        <p>Button Group does not accept attributes</p>
        <ButtonGroup>
          <Button text="Button 1" />
          <Button text="Button 2" />
          <Button text="Button 3" />
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button type="cancel" text="Cancel" />
          <Button type="save" text="Save" />
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button type="save" text="Button 1" />
          <Button type="warn" text="Button 2" />
          <Button type="cancel" text="Button 3" />
          <Button type="alt" text="Button 4" />
          <Button kind="" text="Button 5" />
          <Button disabled={true} text="Button Disabled" />
        </ButtonGroup>

        <CodeCard
          open
          header="Usage"
          height={450}
          url="https://gist.githubusercontent.com/d88naimi/f03da3c98f7931f0e1564c6ebb4611b4/raw/6fc0f0012c97d7ec2b2ef22745c5c45d923e993f/ButtonGroup.js"
        />

        <CodeCard
          header="Code"
          height={450}
          url="https://gist.githubusercontent.com/d88naimi/ab6a84c02946f1c9ddf4f51ff756dbe0/raw/ac14c49a0991e6eefdd1c9591c8feb05e8e030a7/ButtonGroupCode.js"
        />
      </React.Fragment>
    );
  }
}

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
          <Button kind="" text="Button1" />
          <Button kind="" text="Button2" />
          <Button kind="" text="Button3" />
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button type="cancel" text="Cancel" />
          <Button type="save" text="Save" />
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <Button kind="" text="Button1" />
          <Button type="warn" text="Button2" />
          <Button kind="" text="Button3" />
          <Button kind="alt" text="Button4" />
          <Button kind="" text="Button5" />
        </ButtonGroup>

        <CodeCard
          open
          header="Usage"
          height={350}
          url="https://gist.githubusercontent.com/grantglidewell/54c76b82060c2622f5fa2e3c470168db/raw/a5b4ae276b4dd6b908f2074c699d1552b2a54195/ButtonGroupUsage.js"
        />

        <CodeCard
          header="Code"
          url="https://gist.githubusercontent.com/grantglidewell/8f375fd1636847bcf2880a6625c32dd5/raw/5e865f0e23e514520528ca06177b45d7283e64c0/ButtonGroup.js"
        />

        {/* <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="350px"
            url="https://gist.githubusercontent.com/grantglidewell/54c76b82060c2622f5fa2e3c470168db/raw/a5b4ae276b4dd6b908f2074c699d1552b2a54195/ButtonGroupUsage.js"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/8f375fd1636847bcf2880a6625c32dd5/raw/5e865f0e23e514520528ca06177b45d7283e64c0/ButtonGroup.js" />
        </CollapsibleCard> */}
      </React.Fragment>
    )
  }
}

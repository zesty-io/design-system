import React, { Component, Fragment } from 'react'

import { Button } from '@zesty-io/core/dist/Button'
import { ButtonGroup } from '@zesty-io/core/dist/ButtonGroup'
import { CodeCard } from '../components/CodeCard'
import { ConfirmDialog } from '@zesty-io/core/dist/ConfirmDialog'

export class ConfirmDialogGuide extends Component {
  state = {
    isOpen: false,
    customIsOpen: false
  }
  render() {
    return (
      <Fragment>
        <p>description</p>
        <Button onClick={() => this.setState({ isOpen: true })}>
          Open Confim
        </Button>
        <Button onClick={() => this.setState({ customIsOpen: true })}>
          Open Confirm with Custom ButtonGroup
        </Button>
        <ConfirmDialog
          isOpen={this.state.isOpen}
          prompt="Is it safe to go alone?"
          callback={response => {
            this.setState({ isOpen: false })
            console.log(response)
          }}
        />
        <ConfirmDialog
          isOpen={this.state.customIsOpen}
          prompt="Custom button group">
          <Button
            id="confirmTrue"
            kind="save"
            onClick={() => {
              this.setState({ customIsOpen: false })
            }}>
            {'Save'}
          </Button>
          <Button
            id="confirmFalse"
            kind="warn"
            onClick={() => {
              this.setState({ customIsOpen: false })
            }}
            text="Discard"
          />
        </ConfirmDialog>

        <CodeCard
          header="Usage"
          height={250}
          open
          children={`// standard yes/no response
<ConfirmDialog
  isOpen={this.state.isOpen}
  prompt="Is it safe to go alone?"
  callback={response => {
    this.setState({ isOpen: false })
    console.log(response)
  }}
/>
// custom button group
<ConfirmDialog
  isOpen={this.state.customIsOpen}
  prompt="Custom button group">
  <Button
    id="confirmTrue"
    kind="save"
    onClick={() => {
      this.setState({ customIsOpen: false })
    }}>
    {'Save'}
  </Button>
  <Button
    id="confirmFalse"
    onClick={() => {
      this.setState({ customIsOpen: false })
    }}
    text="Discard"
  />
</ConfirmDialog>`}
        />

        <CodeCard
          header="Code"
          height={250}
          children={`export const ConfirmDialog = props => {
  return (
    (props.isOpen && (
      <section className={styles.confirmWrapper}>
        <section className={cx(styles.Confirm, styles[props.kind])}>
          <h1>{props.prompt}</h1>
          <footer>
            {props.children ? (
              // custom buttonGroup renders
              <ButtonGroup
                className={'$/{styles.buttons} $/{
            props.single ? styles.short : ''
          }'}>
                {props.children}
              </ButtonGroup>
            ) : (
              <ButtonGroup
                className={'$/{styles.buttons} $/{
            props.single ? styles.short : ''
          }'}>
                <Button
                  id="confirmTrue"
                  type={props.kind}
                  onClick={() => {
                    props.callback(true)
                  }}>
                  {props.kind === 'warn' && (
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    />
                  )}
                  {props.confirmText || 'Yes'}
                </Button>
                <Button
                  id="confirmFalse"
                  onClick={() => {
                    props.callback(false)
                  }}
                  className={props.single ? styles.hide : ''}
                  text="No"
                />
              </ButtonGroup>
            )}
          </footer>
        </section>
      </section>
    )) ||
    null
  )
}`}
        />
      </Fragment>
    )
  }
}

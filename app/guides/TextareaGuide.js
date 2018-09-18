import React, { Component } from 'react'

import { Textarea } from '@zesty-io/core/dist/Textarea'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@zesty-io/core/dist/Card'

export class TextareaGuide extends Component {
  render() {
    return (
      <div id="Guide">
        <div id="Description">
          <h1>Textarea Component</h1>
        </div>

        <div id="Examples">
          <Card>
            <CardHeader>
              <h2>How it looks</h2>
            </CardHeader>
            <CardContent>
              <h3>basic usage</h3>
              <Textarea
                name="example1"
                placeholder="Zesty.io textarea"
                value="Hello World"
              />

              <h3>
                <code>required</code>
              </h3>
              <Textarea
                name="example2"
                value="This textarea is required"
                required
              />

              <h3>
                <code>disabled</code>
              </h3>
              <Textarea
                name="example3"
                value="This textarea disabled"
                disabled
              />
            </CardContent>
          </Card>
        </div>

        <div id="Props">
          <Card>
            <CardHeader>
              <h2>Component Properties</h2>
            </CardHeader>
            <CardContent>
              <ul>
                <li>
                  We pass through all provided props to the underlying
                  `textarea` element. This means all{' '}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#Attributes"
                    target="_blank">
                    standard HTML attributes
                  </a>{' '}
                  are available to you.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/*
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code="<Input
              name=&quot;name&quot;
              autoComplete=&quot;off&quot;
              placeholder=&quot;Name (autocomplete disabled)&quot;
            />"
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Usage and Code">
          <GithubEmbed
            height="400px"
            url="https://gist.githubusercontent.com/grantglidewell/6f18bcb18ef81edaa179f0ad4bfbff9e/raw/6e838538910a4e100a7cef0b8114c8f547397d38/Input.js"
          />
        </CollapsibleCard>
        */}
      </div>
    )
  }
}

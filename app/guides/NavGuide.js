import React, { Component } from 'react'

import { Nav } from '../../core/src/Nav'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class NavGuide extends Component {
  state = {
    selected: ''
  }
  componentDidMount() {
    this.setState({
      selected: `nav/${this.props.location.pathname.split('/').pop()}`
    })
  }
  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname.split('/').pop() !== state.selected) {
      return { selected: `nav/${props.location.pathname.split('/').pop()}` }
    } else {
      return null
    }
  }
  render() {
    return (
      <React.Fragment>
        <p>
          This is our generic navigation component. It is used within the
          manager application in multiple views.
        </p>
        <p>
          <strong>Props:</strong> title (String identifying the title of the
          nav), content (an object containing menu content), selected (a string
          matching the path of the selected item)
        </p>
        <br />
        <Nav
          title="Test Title"
          content={navData}
          selected={this.state.selected}
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="55px"
            code={`<Nav content={content} title="Test Title" selected={selection.identifier} />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/bf5518a64322afd96b165a41ba3799b5/raw/9ee2a4f7b918acdc4c4570b0920be4c71964f926/Nav.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}

const navData = [
  {
    name: 'Clippings',
    path: 'nav/asda-asd5ads-dsa',
    icon: 'bars'
  },
  { name: 'Dashboard Widgets', path: 'nav/asda-aesdads-dsa', icon: 'bars' },
  {
    name: 'Sidebar Contact Form',
    path: 'nav/asda-asdsdads-dsa',
    icon: 'bars'
  },
  {
    name: 'Simple Page',
    path: 'nav/as4da-asdads-ds4a',
    icon: 'bars'
  },
  {
    name: 'Homepage',
    path: 'nav/asda-asda4ds-dsa',
    icon: 'bars',
    children: [
      { name: 'child', path: 'nav/252n0-23n452', icon: 'cube' },
      {
        name: 'homepages',
        path: 'nav/4898-44646-12341234',
        icon: 'cube',
        children: [
          {
            name: 'child',
            path: 'nav/8238-235325ads-ewew',
            icon: 'cube'
          },
          {
            name: 'child',
            path: 'nav/8238-235asd25ads-ewew',
            icon: 'cube',
            children: [
              { name: 'buried', path: 'nav/89234djns23u80', icon: 'cube' }
            ]
          },
          {
            name: 'node',
            path: 'nav/238-4562346',
            icon: 'cube'
          }
        ]
      }
    ]
  }
]

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import Menu from '../menu'
import Showcase from '../showcase'
import Options from '../options'

import styles from './styles.less'

import ButtonGuide from '../../../../core/Button/guide'
import ButtonGroupGuide from '../../../../core/ButtonGroup/guide'
import CardGuide from '../../../../core/Card/guide'
import DividerGuide from '../../../../core/Divider/guide'
import Loader from '../../../../core/Loader'
import SearchGuide from '../../../../core/Search/guide'
import SelectGuide from '../../../../core/Select/guide'
import InputGuide from '../../../../core/input/guide'
import ToggleGuide from '../../../../core/Toggle/guide'
import InfotipGuide from '../../../../core/Infotip/guide'

// these require router to function properly
import Url from '../../../../core/Url'
import AppLink from '../../../../core/AppLink'
// may take some fancy timeout magic to show this off
import WithLoader from '../../../../core/WithLoader'

class Guide extends Component {
  // TODO: add URLs to gists
  state = {
    Button: {
      description:
        'A flexible button component with styles including warn, cancel, and save'
    },
    ButtonGroup: {
      description: 'A wrapper to group buttons'
    },
    Card: {
      description:
        'Cards are universal use display components, they respond well to grid and flex systems that have their boundaries clearly drawn.'
    },
    Divider: {
      description: 'A styled horizontal divider'
    },
    Loader: { description: 'A loading indicator for inline use' },
    Search: {
      description: 'A search component that takes onKeyup and onClick props'
    },
    Select: {
      description:
        'The Select component requires that you also import the Option component to nest inside of it for each option. It takes an onSelect prop.'
    },
    Input: { description: 'Input component with zesty styling' },
    Toggle: {
      description: 'A toggle component that works as a checkbox'
    },
    Infotip: {
      description: 'Mouseover for more information'
    }
  }
  render() {
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options
            selected={this.props.location.pathname.substr(1)  || ''}
            clearSelected={this.clearSelected}
          />
        </section>
        <section className={styles.menu}>
          <Menu
            history={this.props.history}
            components={this.state}
            onSelect={this.onSelect}
          />
        </section>
        <section className={styles.showcase}>
          {/* <Showcase selected={components[this.state.selected] || null}>
            {SelectedComponent && <SelectedComponent />}
          </Showcase> */}
          <Switch>
            <Route
              exact
              path="/ButtonGroup"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <ButtonGroupGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Button"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <ButtonGuide />
                  </Showcase>
                )
              }}
            />

            <Route
              exact
              path="/Card"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <CardGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Divider"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <DividerGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Loader"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <Loader />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Search"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <SearchGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Select"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <SelectGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Input"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <InputGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              exact
              path="/Toggle"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <ToggleGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              path="/Infotip"
              render={() => {
                return (
                  <Showcase selected={this.state[this.props.location.pathname.substr(1)]}>
                    <InfotipGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              path="/"
              render={() => {
                return <h1>Select a component</h1>
              }}
            />
            {/* // <Route
            //   path="/Button"
            //   render={() => {
            //     this.state.buttonthis.Props.map(props => {
            //       return <Button {...props} />
            //     })
            //   }}
            // /> */}
          </Switch>
        </section>
      </main>
    )
  }
  onSelect = selected => {
    this.setState({ selected })
  }
  clearSelected = () => {
    this.setState({ selected: '' })
  }
}

export default withRouter(Guide)

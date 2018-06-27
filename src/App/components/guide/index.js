import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import Menu from '../menu'
import Showcase from '../showcase'
import Options from '../options'

import styles from './styles.less'

import components from './components'

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

class Guide extends Component {
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
  static getDerivedStateFromProps(props, state) {
    console.log('props', props, 'state', state.selected)
    if (props.match.params.component !== state.selected) {
      return { selected: props.match.params.component }
    }
    return null
  }
  render() {
    const SelectedComponent =
      this.state.selected && components[this.state.selected].component
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options
            selected={this.state.selected}
            clearSelected={this.clearSelected}
          />
        </section>
        <section className={styles.menu}>
          <Menu
            history={this.props.history}
            components={components}
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
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
                  <Showcase selected={components[this.state.selected] || null}>
                    <ToggleGuide />
                  </Showcase>
                )
              }}
            />
            <Route
              path="/Infotip"
              render={() => {
                return (
                  <Showcase selected={components[this.state.selected] || null}>
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
            //     this.state.buttonProps.map(props => {
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

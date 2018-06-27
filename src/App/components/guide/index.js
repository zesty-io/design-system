import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import styles from "./styles.less";
import Menu from "../menu";
import Showcase from "../showcase";
import Options from "../options";

import ButtonGuide from "../../../../core/Button/guide";
import ButtonGroupGuide from "../../../../core/ButtonGroup/guide";
import CardGuide from "../../../../core/Card/guide";
import DividerGuide from "../../../../core/Divider/guide";
// import Loader from '../../../../core/Loader/'
import SearchGuide from "../../../../core/Search/guide";
import SelectGuide from "../../../../core/Select/guide";
import InputGuide from "../../../../core/input/guide";
import ToggleGuide from "../../../../core/Toggle/guide";
import InfotipGuide from "../../../../core/Infotip/guide";

export default class Guide extends Component {
  constructor(props) {
    super(props);

    console.log(props.components);

    this.state = {
      selected: props.components["Button"]
    };
  }
  render() {
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options
            selected={this.props.location.pathname.substr(1) || ""}
            clearSelected={this.clearSelected}
          />
        </section>
        <section className={styles.menu}>
          <Menu
            history={this.props.history}
            components={this.props.components}
            onSelect={this.onSelect}
          />
        </section>
        <section className={styles.showcase}>
          <Showcase selected={this.state.selected}>
            <Switch>
              <Route path="/button" component={ButtonGuide} />
              <Route path="/buttongroup" component={ButtonGroupGuide} />
              <Route path="/card" component={CardGuide} />
              <Route path="/divider" component={DividerGuide} />
              <Route path="/search" component={SearchGuide} />
              <Route path="/select" component={SelectGuide} />
              <Route path="/input" component={InputGuide} />
              <Route path="/toggle" component={ToggleGuide} />
              <Route path="/infotip" component={InfotipGuide} />
            </Switch>
          </Showcase>
        </section>
      </main>
    );
  }
  onSelect = selected => {
    console.log(selected);
    this.setState({ selected });
  };
  clearSelected = () => {
    this.setState({ selected: "" });
  };
}

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
          <Showcase
            selected={
              this.props.components[this.props.location.pathname.substr(1)]
            }
          >
            <Switch>
              <Route path="/Button" component={ButtonGuide} />
              <Route path="/ButtonGroup" component={ButtonGroupGuide} />
              <Route path="/Card" component={CardGuide} />
              <Route path="/Divider" component={DividerGuide} />
              <Route path="/Search" component={SearchGuide} />
              <Route path="/Select" component={SelectGuide} />
              <Route path="/Input" component={InputGuide} />
              <Route path="/Toggle" component={ToggleGuide} />
              <Route path="/Infotip" component={InfotipGuide} />
            </Switch>
          </Showcase>
        </section>
      </main>
    );
  }
  onSelect = selected => {
    this.setState({ selected });
  };
  clearSelected = () => {
    this.setState({ selected: "" });
  };
}

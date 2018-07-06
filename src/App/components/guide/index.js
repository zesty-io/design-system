import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import styles from "./styles.less";
import Menu from "../menu";
import Showcase from "../showcase";
import Options from "../options";

import ButtonGuide from "../../guides/ButtonGuide";
import ButtonGroupGuide from "../../guides/ButtonGroupGuide";
import CardGuide from "../../guides/CardGuide";
import DividerGuide from "../../guides/DividerGuide";
import LoaderGuide from "../../guides/LoaderGuide";
import SearchGuide from "../../guides/SearchGuide";
import SelectGuide from "../../guides/SelectGuide";
import InputGuide from "../../guides/inputGuide";
import ToggleGuide from "../../guides/ToggleGuide";
import InfotipGuide from "../../guides/InfotipGuide";

export default class Guide extends Component {
  constructor(props) {
    super(props);
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
              <Route path="/loader" component={LoaderGuide} />
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

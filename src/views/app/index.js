import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import * as Guides from "../../guides";

import styles from "./app.less";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={props => {
            return (
              <main className={styles.App}>
                <section className={styles.options}>
                  <article className={styles.options}>
                    <div className={styles.clear}>
                      <Link to="/">
                        <i className={`fa fa-home ${styles.link}`} />{" "}
                      </Link>
                    </div>
                    <h1>Zesty.io Component Library</h1>
                  </article>
                </section>
                <section className={styles.menu}>
                  <ul className={styles.list}>
                    {this.props.components.map((comp, i) => {
                      return (
                        <Link
                          to={`/${comp.toLowerCase().replace(" ", "-")}`}
                          key={i}
                        >
                          <li>{comp}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </section>
                <section className={styles.showcase}>
                  <Switch>
                    <Route path="/button" component={Guides.ButtonGuide} />
                    <Route
                      path="/button-group"
                      component={Guides.ButtonGroupGuide}
                    />
                    <Route path="/card" component={Guides.CardGuide} />
                    <Route path="/divider" component={Guides.DividerGuide} />
                    <Route path="/search" component={Guides.SearchGuide} />
                    <Route path="/select" component={Guides.SelectGuide} />
                    <Route path="/loader" component={Guides.LoaderGuide} />
                    <Route path="/input" component={Guides.InputGuide} />
                    <Route path="/toggle" component={Guides.ToggleGuide} />
                    <Route path="/infotip" component={Guides.InfotipGuide} />
                    <Route
                      path="/"
                      render={props => {
                        return <div>Homepage</div>;
                      }}
                    />
                  </Switch>
                </section>
              </main>
            );
          }}
        />
      </BrowserRouter>
    );
  }
}

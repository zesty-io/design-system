import React, { Component } from "react";

import "@zesty-io/core/Button.css";
import "@zesty-io/core/Card.css";

import { Card, CardHeader, CardContent, CardFooter } from "@zesty-io/core/Card";
import { Button } from "@zesty-io/core/Button";

import styles from "./CardGuide.less";

export default class CardGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardHeader>This is the card Header</CardHeader>
          <CardContent>this is the card content</CardContent>
          <CardFooter>this is the card footer</CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h1>A Large Card Title</h1>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </CardContent>
          <CardFooter className={styles.Footer}>
            <Button type="save" text="save" />
            <Button type="cancel" text="cancel" />
          </CardFooter>
        </Card>
        <Card className={styles.restricted}>
          <CardHeader>
            <h1>A Restricted Card</h1>
          </CardHeader>
          <CardContent>
            Some size restriction goes a long way with cards, they are flex
            based so the can grow and shrink according to their use
          </CardContent>
          <CardFooter>footer</CardFooter>
        </Card>
        <h1>These cards are in a flex container</h1>
        <section className={styles.group}>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>This is the card Header</CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardContent>
            <CardFooter>this is the card footer</CardFooter>
          </Card>
        </section>
      </React.Fragment>
    );
  }
}

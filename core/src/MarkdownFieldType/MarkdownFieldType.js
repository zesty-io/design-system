import React, { Component } from "react";
import { Card, CardHeader, CardContent } from "../Card";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
const marked = require("marked");

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  smartLists: true,
  smartypants: true
});

import styles from "./MarkdownFieldType.less";

export class MarkdownFieldType extends Component {
  state = {
    view: "editor",
    content: this.props.default || ""
  };
  handleUpdate = evt => {
    if (this.props.callback) {
      this.props.callback(evt.target.value);
    }
    this.setState({ content: evt.target.value });
  };
  changeTab = evt => {
    this.setState({ view: evt.target.name });
  };
  render() {
    return (
      <Card className={styles.MarkdownFieldType}>
        <CardHeader>
          <ButtonGroup className={styles.Tabs}>
            <Button
              onClick={this.changeTab}
              type={this.state.view !== "editor" ? "cancel" : ""}
              name="editor"
              text="Editor"
            />
            <Button
              onClick={this.changeTab}
              type={this.state.view !== "output" ? "cancel" : ""}
              name="output"
              text="View Output"
            />
            <Button
              onClick={this.changeTab}
              type={this.state.view !== "help" ? "cancel" : ""}
              name="help"
              text="Help"
            />
          </ButtonGroup>
        </CardHeader>
        <CardContent className={styles.Content}>
          {this.state.view === "editor" ? (
            <textarea
              className={styles.TextInput}
              onChange={this.handleUpdate}
              value={this.state.content}
            />
          ) : this.state.view === "help" ? (
            <section className={styles.Help}>
              <textarea
                className={styles.TextInput}
                value={markdownHelp}
                readOnly
              />
              <article className={styles.HelpOutput}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(markdownHelp)
                  }}
                />
              </article>
            </section>
          ) : (
            <article className={styles.Output}>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.content)
                }}
              />
            </article>
          )}
        </CardContent>
      </Card>
    );
  }
}

const markdownHelp = `Zesty.io supported markdown
Headers
# Level 1 Header (H1)
## Level 2 Header (H2)
##### Level 5 Header (H5)

Paragraphs
One or more consecutive lines of text separated by one or more blank lines

Line Break
End a line with two or more spaces

Unordered Lists
* Red
* Yellow

- Red
- Yellow

+ Red
+ Yellow

Ordered Lists
1. Red
2. Yellow

Definition Lists
Term
: Definition

Zesty
: Website Manager
: Helpful Tool

Italics
Go *Zesty*
Go _Zesty_

Bold
Go **Zesty**
Go __Zesty__

Link
This is a [Zesty](http://gozesty.com/ "Optional Title") link

Automatic Links
<http://gozesty.com/>
<info@gozesty.com></code>

Code Blocks
Indent with 4 spaces

Image Call
![Alt text](/files/example.jpg "Image call example")`;

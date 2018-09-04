module.exports = template = {
  react: name => {
    return `import React from "react";
import styles from "./${name}.less";

export class ${name} extends Component {
  render() {
      return (
      <div className={styles.${name}}>write a better component than this</div>
    )
  };
}`;
  },
  css: name => {
    return `.${name} {
    }`;
  },
  guide: name => {
    return `import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { ${name} } from '@zesty-io/core/dist/${name}'

export class ${name}Guide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>description</p>
        //render exampled of the component

        <CodeCard header="Usage" height={250} open>
          // usage guide here
        </CodeCard>

        <CodeCard header="Code" height={250}>
          // component code here
        </CodeCard>
      </React.Fragment>
    )
  }
}`;
  }
};

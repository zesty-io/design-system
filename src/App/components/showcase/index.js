import React from 'react'

import styles from './showcase.less'

const Showcase = props => {
  console.log(props)
  return (
    <div className={styles.showcase}>
      <section className={styles.description}>
        {props.selected && props.selected.description}
      </section>
      <section className={styles.usage}>{props.children}</section>
      <section className={styles.code}>
        {props.children && (
          <code>
            write a utility to copy the raw components as stringify is getting
            circular refs
            {props.selected && props.selected.code}
          </code>
        )}
      </section>
    </div>
  )
}

export default Showcase

import React from 'react'

import styles from './showcase.less'

const Showcase = props => {
  return (
    <div className={styles.showcase}>
      <section className={styles.description}>{props.selected}</section>
      <section className={styles.usage}>{props.children}</section>
    </div>
  )
}

export default Showcase

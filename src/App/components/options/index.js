import React from 'react'

import styles from './options.less'

const Options = props => {
  return (
    <article className={styles.options}>
      <div className={styles.clear}>
        <h3 onClick={props.clearSelected}> X </h3>
      </div>
      <h1>{props.selected || 'Zesty Component Library'}</h1>
    </article>
  )
}

export default Options

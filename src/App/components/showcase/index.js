import React from 'react'

import styles from './showcase.less'

const Showcase = props => {
  return <div className={styles.showcase}>{props.children}</div>
}

export default Showcase

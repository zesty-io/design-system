import React from 'react'
import styles from './WithLoader.less'

import { Loader } from '../Loader'

export function WithLoader(props) {
  return props.condition ? (
    props.children
  ) : (
    <section
      className={styles.Loading}
      style={{ height: props.height, width: props.width }}>
      <h3>{props.message}</h3>
      <Loader />
    </section>
  )
}

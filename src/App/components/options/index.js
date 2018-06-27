import React from 'react'
import { Link } from 'react-router-dom'
import styles from './options.less'

const Options = props => {
  return (
    <article className={styles.options}>
      <div className={styles.clear}>
        <Link to="/">
          {' '}
          <i className={`fa fa-home ${styles.link}`} />{' '}
        </Link>
      </div>
      <h1>{props.selected || 'Zesty Component Library'}</h1>
    </article>
  )
}

export default Options

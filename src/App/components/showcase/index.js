import React from 'react'
import GithubEmbed from '../githubembed'
import styles from './showcase.less'

const Showcase = props => {
  return (
    <div className={styles.showcase}>
      <section className={styles.description}>
        {props.selected.description}
      </section>
      <section className={styles.usage}>{props.children}</section>
      <section className={styles.code}>
        {props.selected && <GithubEmbed url={props.url} />}
      </section>
    </div>
  )
}

export default Showcase

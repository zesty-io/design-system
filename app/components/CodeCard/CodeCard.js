import React from 'react'

import GithubEmbed from '../githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

import styles from './CodeCard.less'

/**
 * [CodeCard description]
 * @method      CodeCard
 *
 * header
 * height
 * code
 * open
 */
export function CodeCard(props) {
  return (
    <div className={styles.CodeCard}>
      <CollapsibleCard header={props.header} open={props.open}>
        <GithubEmbed
          height={`${props.height}px`}
          code={props.children}
          url={props.url}
        />
      </CollapsibleCard>
    </div>
  )
}

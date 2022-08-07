import clsx from 'clsx'
import React from 'react'

import styles from './BlockTitle.module.scss'

export function BlockTitle(props) {
  const { title, subTitle, hasSeparator } = props

  return (
    <div
      className={clsx(styles.container, hasSeparator && styles.withSeparator)}
    >
      <div className={styles.title}>
        {title}
        {subTitle && <span>{subTitle}</span>}
      </div>
    </div>
  )
}

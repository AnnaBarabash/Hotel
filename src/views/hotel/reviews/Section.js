import React from 'react'

import styles from './Section.module.scss'

export function Section(props) {
  const { title, children } = props

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {children && children}
    </div>
  )
}

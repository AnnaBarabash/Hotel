import clsx from 'clsx'
import { chunk } from 'lodash'
import React from 'react'

import styles from './Section.module.scss'

export function Section(props) {
  const { title, description, list, children } = props

  function renderList(list) {
    const keys = [...Array(2).keys()]
    const chunks = chunk(list, Math.ceil(list.length / keys.length))

    return (
      <div className={styles.list}>
        {keys.map((key) => (
          <div key={key} className={clsx(styles.col, styles[`col${key}`])}>
            {chunks[key] &&
              chunks[key].map((el) => (
                <div key={el} className={styles.row}>
                  <span />
                  {el}
                </div>
              ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
      {list && renderList(list)}
      {children && children}
    </div>
  )
}

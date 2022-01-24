import * as React from 'react'

import styles from './SearchButton.module.scss'

export function SearchButton() {
  return (
    <div>
      <button className={styles.button}>
        <span>SEARCH HOTELS</span>
      </button>
    </div>
  )
}

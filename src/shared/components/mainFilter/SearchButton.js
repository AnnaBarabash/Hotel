import clsx from 'clsx'
import * as React from 'react'

import styles from './SearchButton.module.scss'

export function SearchButton(props) {
  const { isEnabled, onSearch } = props

  function handleSearch() {
    if (isEnabled) {
      onSearch()
    }
  }

  return (
    <div>
      <button
        className={clsx(styles.button, !isEnabled && styles.disabled)}
        disabled={!isEnabled}
        onClick={handleSearch}
      >
        <span>SEARCH HOTELS</span>
      </button>
    </div>
  )
}

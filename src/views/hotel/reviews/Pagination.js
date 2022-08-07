import { Pagination as MuiPagination } from '@mui/material'
import React, { useState } from 'react'

import styles from './Pagination.module.scss'

export function Pagination() {
  const [page, setPage] = useState(1)

  function handleChange(event, value) {
    setPage(value)
  }

  return (
    <div className={styles.container}>
      <MuiPagination count={5} page={page} onChange={handleChange} />
    </div>
  )
}

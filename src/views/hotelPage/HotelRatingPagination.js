import * as React from 'react'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import styles from './HotelRatingPagination.module.scss'

export function HotelRatingPagination() {
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <div className={styles.pagination}>
      <Stack spacing={2} className={styles.pagination}>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  )
}

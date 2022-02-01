import { Pagination as MuiPagination } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './Pagination.module.scss'

export function Pagination(props) {
  const dispatch = useDispatch()
  const { page } = props

  function handleChange(event, value) {
    dispatch(hotelListSlice.actions.setFilters({ page: value }))
  }

  return (
    <div className={styles.container}>
      <MuiPagination count={10} page={page} onChange={handleChange} />
    </div>
  )
}

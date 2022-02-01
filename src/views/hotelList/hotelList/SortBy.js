import Popover from '@mui/material/Popover'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { SORT_BY } from '../../../shared/constants'
import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './SortBy.module.scss'

export function SortBy(props) {
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null)

  const { sortBy } = props

  const open = Boolean(anchorEl)
  const id = open ? 'sort-by-popover' : undefined

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  function handleSortByChange(evt) {
    const newSortBy = evt.currentTarget.getAttribute('data-key')

    if (sortBy !== newSortBy) {
      dispatch(hotelListSlice.actions.setFilters({ sortBy: newSortBy }))
    }

    handleClose()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>SORT BY</div>
      <div className={styles.suggestion} onClick={handleOpen}>
        {SORT_BY.find((el) => el.key === sortBy).value}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        classes={{ paper: styles.popover }}
      >
        {SORT_BY.map(({ key, value }) => (
          <div
            key={key}
            className={styles.listEl}
            data-key={key}
            onClick={handleSortByChange}
          >
            {value}
          </div>
        ))}
      </Popover>
    </div>
  )
}

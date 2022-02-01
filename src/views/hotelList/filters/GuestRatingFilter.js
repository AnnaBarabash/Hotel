import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import React from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './GuestRatingFilter.module.scss'

export function GuestRatingFilter(props) {
  const dispatch = useDispatch()

  const { state } = props

  function changeCheckboxState(evt) {
    const value = evt.target.getAttribute('data-value')
    dispatch(
      hotelListSlice.actions.setFilters({
        guestRating: {
          guestRatingMin: state.guestRatingMin === value ? undefined : value,
        },
      })
    )
  }

  return (
    <>
      <h4>GUEST RATING</h4>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        All - no preference
      </Typography>

      <div className={styles.ratings}>
        <div
          className={clsx(
            styles.rating,
            (state.guestRatingMin >= 6) & (state.guestRatingMin < 7) &&
              styles.checked
          )}
          onClick={changeCheckboxState}
          data-value='6'
        >
          6.0 +
        </div>
        <div
          className={clsx(
            styles.rating,
            (state.guestRatingMin >= 6) & (state.guestRatingMin < 8) &&
              styles.checked
          )}
          onClick={changeCheckboxState}
          data-value='7'
        >
          7.0 +
        </div>
        <div
          className={clsx(
            styles.rating,
            (state.guestRatingMin >= 6) & (state.guestRatingMin < 9) &&
              styles.checked
          )}
          onClick={changeCheckboxState}
          data-value='8'
        >
          8.0 +
        </div>
        <div
          className={clsx(
            styles.rating,
            state.guestRatingMin >= 6 && styles.checked
          )}
          onClick={changeCheckboxState}
          data-value='9'
        >
          9.0 +
        </div>
      </div>
    </>
  )
}

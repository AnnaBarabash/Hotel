import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import React, { useState } from 'react'

import { GUEST_RATING_FILTER_INITIAL_STATE } from '../../../shared/constants'
import styles from './GuestRatingFilter.module.scss'

export function GuestRatingFilter() {
  const [state, setState] = useState(GUEST_RATING_FILTER_INITIAL_STATE)

  function changeCheckboxState(evt) {
    const value = evt.target.getAttribute('data-value')
    setState({ guestRatingMin: value })
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

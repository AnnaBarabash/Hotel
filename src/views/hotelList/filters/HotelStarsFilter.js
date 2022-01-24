import Rating from '@mui/material/Rating'
import React, { useState } from 'react'

import { HOTEL_STARS_FILTER_INITIAL_STATE } from '../../../shared/constants'
import styles from './HotelStarsFilter.module.scss'

export function HotelStarsFilter() {
  const [state, setState] = useState(HOTEL_STARS_FILTER_INITIAL_STATE)

  function changeCheckboxState(evt) {
    const { checked, value } = evt.currentTarget

    if (checked) {
      setState({ starRatings: [...state.starRatings, value] })
    } else {
      setState({ starRatings: state.starRatings.filter((el) => el !== value) })
    }
  }

  return (
    <>
      <h4>HOTEL DE STARS</h4>
      <div class={styles.rating}>
        <Rating
          name='rating'
          value={state.starRatings.includes('1') ? 1 : 0}
          max={1}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.starRatings.includes('1')}
          value='1'
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div class={styles.rating}>
        <Rating
          name='rating'
          value={state.starRatings.includes('2') ? 2 : 0}
          max={2}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.starRatings.includes('2')}
          value='2'
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div class={styles.rating}>
        <Rating
          name='rating'
          value={state.starRatings.includes('3') ? 3 : 0}
          max={3}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.starRatings.includes('3')}
          value='3'
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div class={styles.rating}>
        <Rating
          name='rating'
          value={state.starRatings.includes('4') ? 4 : 0}
          max={4}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.starRatings.includes('4')}
          value='4'
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div class={styles.rating}>
        <Rating
          name='rating'
          value={state.starRatings.includes('5') ? 5 : 0}
          max={5}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.starRatings.includes('5')}
          value='5'
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
    </>
  )
}

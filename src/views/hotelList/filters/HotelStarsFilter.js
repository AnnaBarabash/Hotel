import Rating from '@mui/material/Rating'
import React from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './HotelStarsFilter.module.scss'

export function HotelStarsFilter(props) {
  const dispatch = useDispatch()

  const { state } = props

  function changeCheckboxState(evt) {
    const { checked, value } = evt.currentTarget

    if (checked) {
      dispatch(
        hotelListSlice.actions.setFilters({ starRatings: [...state, value] })
      )
    } else {
      dispatch(
        hotelListSlice.actions.setFilters({
          starRatings: state.filter((el) => el !== value),
        })
      )
    }
  }

  return (
    <>
      <h4>HOTEL NY STARS</h4>
      <div className={styles.rating}>
        <Rating
          name='rating'
          value={state.includes('1') ? 1 : 0}
          max={1}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.includes('1')}
          value='1'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.rating}>
        <Rating
          name='rating'
          value={state.includes('2') ? 2 : 0}
          max={2}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.includes('2')}
          value='2'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.rating}>
        <Rating
          name='rating'
          value={state.includes('3') ? 3 : 0}
          max={3}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.includes('3')}
          value='3'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.rating}>
        <Rating
          name='rating'
          value={state.includes('4') ? 4 : 0}
          max={4}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.includes('4')}
          value='4'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.rating}>
        <Rating
          name='rating'
          value={state.includes('5') ? 5 : 0}
          max={5}
          readOnly
        />
        <input
          type='checkbox'
          checked={state.includes('5')}
          value='5'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
    </>
  )
}

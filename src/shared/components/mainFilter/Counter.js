import PersonIcon from '@mui/icons-material/Person'
import SingleBedIcon from '@mui/icons-material/SingleBed'
import { capitalize } from 'lodash'

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import { PERSONS_COUNTER } from '../../constants'
import styles from './Counter.module.scss'

export function Counter(props) {
  const dispatch = useDispatch()

  const { type } = props

  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0)

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (count < 6) {
      setCount(count + 1)
    }
  }

  //Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    dispatch(hotelListSlice.actions.setFilters({ counter: { [type]: count } }))
  }, [dispatch, type, count])

  return (
    <div className={styles.counter}>
      <div className={styles.text}>
        {capitalize(type)} {count}
        {type === PERSONS_COUNTER ? <PersonIcon /> : <SingleBedIcon />}
      </div>
      <div>
        <button className={styles.button} onClick={handleDecrement}>
          -
        </button>
        <button className={styles.button} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

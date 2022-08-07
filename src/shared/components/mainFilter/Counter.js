// import PersonIcon from '@mui/icons-material/Person'
// import SingleBedIcon from '@mui/icons-material/SingleBed'
import { capitalize } from 'lodash'
import React from 'react'
import { useDispatch } from 'react-redux'

import { PersonIcon } from '../../../shared/icons/PersonIcon';
import { RoomIcon } from '../../../shared/icons/RoomIcon';
import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import { PERSONS_COUNTER } from '../../constants'
import styles from './Counter.module.scss'

export function Counter(props) {
  const dispatch = useDispatch()

  const { type, count } = props

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if (count < 6) {
      dispatch(hotelListSlice.actions.setFilters({ [type]: count + 1 }))
    }
  }

  // Create handleDecrement event handler
  const handleDecrement = () => {
    if (count > 0) {
      dispatch(hotelListSlice.actions.setFilters({ [type]: count - 1 }))
    }
  }

  return (
    <div className={styles.counter}>
      <div className={styles.text}>
        {capitalize(type)} {count}
        {type === PERSONS_COUNTER ? <PersonIcon /> : <RoomIcon />}
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

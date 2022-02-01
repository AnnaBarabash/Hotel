import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import WifiIcon from '@mui/icons-material/Wifi'
import React from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './TopCriteriasFilter.module.scss'

export function TopCriteriasFilter(props) {
  const dispatch = useDispatch()

  const { state } = props

  function changeCheckboxState(evt) {
    const { value, checked } = evt.currentTarget
    dispatch(
      hotelListSlice.actions.setFilters({
        topCriterias: { ...state, [value]: checked },
      })
    )
  }

  return (
    <>
      <h4>TOP CRITERIA</h4>
      <div className={styles.topCriteriaCheckbox}>
        <div className={styles.label}>
          <EmojiFoodBeverageIcon />
          Breakfast included
        </div>
        <input
          type='checkbox'
          checked={state['BREAKFAST_INCLUDED']}
          value='BREAKFAST_INCLUDED'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.topCriteriaCheckbox}>
        <div className={styles.label}>
          <MoneyOffIcon />
          Free cancelation
        </div>
        <input
          type='checkbox'
          checked={state['FREECANCEL']}
          value='FREECANCEL'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.topCriteriaCheckbox}>
        <div className={styles.label}>
          <WifiIcon />
          Free WiFi in rooms
        </div>
        <input
          type='checkbox'
          checked={state['FREEWLAN']}
          value='FREEWLAN'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.topCriteriaCheckbox}>
        <div className={styles.label}>
          <LocalParkingIcon />
          Parking
        </div>
        <input
          type='checkbox'
          checked={state['CARPARKDIRECTLYATHOTEL']}
          value='CARPARKDIRECTLYATHOTEL'
          onChange={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
    </>
  )
}

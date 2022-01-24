import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import MoneyOffIcon from '@mui/icons-material/MoneyOff'
import WifiIcon from '@mui/icons-material/Wifi'
import React, { useState } from 'react'

import { TOP_CRITERIA_FILTER_INITIAL_STATE } from '../../../shared/constants'
import styles from './TopCriteriaFilter.module.scss'

export function TopCriteriaFilter() {
  const [state, setState] = useState(TOP_CRITERIA_FILTER_INITIAL_STATE)

  function changeCheckboxState(evt) {
    const { checked, value } = evt.currentTarget
    setState({ ...state, ...{ [value]: checked } })
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
          onClick={changeCheckboxState}
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
          onClick={changeCheckboxState}
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
          onClick={changeCheckboxState}
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
          onClick={changeCheckboxState}
          className={styles.checkbox}
        />
      </div>
    </>
  )
}

import { MobileDateRangePicker as MuiDateRangePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'
import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'


import { hotelListSlice } from '../../../store/slices/hotelListSlice';
import styles from './DateRangePicker.module.scss'

export function DateRangePicker() {
  const dispatch = useDispatch()

  const [value, setValue] = useState([null, null])
  
  useEffect(() => {
    if (value[0] && value[1]) {
      dispatch(hotelListSlice.actions.setFilters({
        dates: {
          checkIn: moment(value[0]).format('YYYY-MM-DD'),
          checkOut: moment(value[1]).format('YYYY-MM-DD'),
        }
      }))
    }
  }, [dispatch, value])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} classes={{ root: styles.textFiled }} />
            <span className={styles.divider}>to</span>
            <TextField {...endProps} classes={{ root: styles.textFiled }} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  )
}

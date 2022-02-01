import { MobileDateRangePicker as MuiDateRangePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'
import React from 'react'
import { useDispatch } from 'react-redux'

import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import styles from './DateRangePicker.module.scss'

export function DateRangePicker(props) {
  const dispatch = useDispatch()

  const { value } = props

  const handleChange = (value) => {
    if (value[0] && value[1]) {
      dispatch(
        hotelListSlice.actions.setFilters({
          dates: {
            checkIn: value[0],
            checkOut: value[1],
          },
        })
      )
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateRangePicker
        startText='Check-in'
        endText='Check-out'
        value={value}
        disablePast
        disableCloseOnSelect={false}
        onChange={(newValue) => {
          handleChange(newValue)
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

import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import styles from './SortByHotelDeSuggestion.module.scss'

const ITEM_HEIGHT = 20
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = ['Guest rating', 'Distance', 'Lowest price first']

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export function SortByHotelDeSuggestion() {
  const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div className={styles.sortByHotelDeSuggestion}>
      <div className={styles.sortBy}>
        <div className={styles.hotelListSuggestion}>SORT BY</div>

        <InputLabel id='demo-multiple-name-label'>
          Hotel DE Suggestion
        </InputLabel>
        <Select
          classes={{ root: styles.hotelDeSuggestion }}
          input={<OutlinedInput label='Hotel DE Suggestion' />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  )
}

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import React from 'react'
import { useSelector } from 'react-redux'
import MapContainer from './MapContainer'

import {
  getHotelDetails,
  getHotelTransportLocations,
} from '../../store/selectors/hotelSelectors'

import styles from './HotelLocation.module.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export function HotelLocation() {
  const hotelDetails = useSelector(getHotelDetails)
  const transportLocations = useSelector(getHotelTransportLocations)
  const {
    propertyDescription: { address },
  } = hotelDetails

  const locationIcon = {
    airport: <span> &#9992; </span>,
    metro: <span> &#128647;</span>,
    'train-station': <span> &#128649;</span>,
  }

  console.log(transportLocations)
  return (
    <Box sx={{ flexGrow: 1 }}>
      {address && <div>{address.fullAddress}</div>}
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} className={styles.mapContainer}>
          <MapContainer />
        </Grid>
        <Grid item xs={12} md={4}>
          <>
            <h4>Transport and mobility</h4>
            {transportLocations &&
              transportLocations.map((transportLocation) => (
                <>
                  {transportLocation.locations.map((location) => (
                    <div>
                      {locationIcon[transportLocation.category]}
                      {`${location.name} ${location.distanceInTime}`}
                    </div>
                  ))}
                </>
              ))}
          </>
        </Grid>
      </Grid>
    </Box>
  )
}

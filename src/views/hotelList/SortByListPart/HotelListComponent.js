import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import React from 'react'

import styles from './HotelListComponent.module.scss'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export function HotelListComponent(props) {
  const { hotelData } = props

  return (
    <Box sx={{ flexGrow: 3 }}>
      <div className={styles.listComponent}>
        <Grid
          container
          spacing={1}
          classes={{ root: styles.listComponentContainer }}
        >
          <Grid item xs={12} md={4}>
            <img src={hotelData.optimizedThumbUrls.srpDesktop} alt='hotelImg' />
          </Grid>
          <Grid item xs={12} md={4}>
            <div>{hotelData.name}</div>
            <div>{hotelData.starRating} HOTEL DE stars</div>
            <div>
              {hotelData.address.streetAddress},{hotelData.address.postalCode}{' '}
              {hotelData.address.locality}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            classes={{ root: styles.listComponentContainerReviews }}
          >
            <div>
              {hotelData.guestReviews.badgeText},
              {hotelData.guestReviews.unformattedRating}
            </div>
            <button className={styles.listComponentButton}>VIEW</button>
          </Grid>
        </Grid>
      </div>
    </Box>
  )
}

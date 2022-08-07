import AccessTimeIcon from '@mui/icons-material/AccessTime'
import WifiIcon from '@mui/icons-material/Wifi'
import Rating from '@mui/material/Rating'
import React from 'react'
import { useSelector } from 'react-redux'

import { AppContainer } from '../../../shared/components/AppContainer'
import {
  FREE_WIFI_IN_ROOMS,
  FRONT_DESK_24,
  HEADING_IN_THE_HOTEL,
  HEADING_SERVICES,
} from '../../../shared/constants'
import { LocationIcon } from '../../../shared/icons/LocationIcon'
import { getHotelDetails } from '../../../store/selectors/hotelSelectors'
import { Carousel } from './Carousel'
import styles from './MainInfo.module.scss'

export function MainInfo() {
  const hotelDescription = useSelector(getHotelDetails)

  const {
    propertyDescription: {
      name,
      starRating,
      address: { fullAddress },
    },
    atAGlance,
    amenities,
  } = hotelDescription

  const hasFreeWifi = (
    atAGlance?.travellingOrInternet?.internet || []
  ).includes(FREE_WIFI_IN_ROOMS)
  const services =
    (
      amenities.find((el) => el.heading === HEADING_IN_THE_HOTEL)?.listItems ||
      []
    ).find((el) => el.heading === HEADING_SERVICES)?.listItems || []
  const hasFrontDesk24 = services.includes(FRONT_DESK_24)

  return (
    <div className={styles.container}>
      <AppContainer className={styles.mainInfo}>
        <div className={styles.hotelStars}>
          <Rating
            name='rating'
            defaultValue={starRating}
            max={Math.ceil(starRating)}
            precision={0.5}
            readOnly
          />
        </div>
        <div className={styles.hotelName}>{name}</div>
        <div className={styles.location}>
          <LocationIcon />
          {fullAddress}
        </div>
      </AppContainer>
      <Carousel />
      <AppContainer className={styles.mainInfo}>
        <div className={styles.hotelAmenities}>
          <div className={styles.title}>HOTEL AMENITIES</div>
          <div>
            {hasFreeWifi && (
              <div className={styles.amenity}>
                <WifiIcon />
                {FREE_WIFI_IN_ROOMS}
              </div>
            )}
            {hasFrontDesk24 && (
              <div className={styles.amenity}>
                <AccessTimeIcon />
                {FRONT_DESK_24}
              </div>
            )}
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

import GoogleMapReact from 'google-map-react'
import React from 'react'
import { useSelector } from 'react-redux'

import { AirportIcon } from '../../shared/icons/AirportIcon'
import { TrainStationIcon } from '../../shared/icons/TrainStationIcon'
import {
  getHotelDetails,
  getHotelTransportLocations,
} from '../../store/selectors/hotelSelectors'
import { BlockTitle } from './BlockTitle'
import styles from './Location.module.scss'

export function Location() {
  const hotelDetails = useSelector(getHotelDetails)
  const transportLocations = useSelector(getHotelTransportLocations)
  const {
    propertyDescription: {
      address: { fullAddress },
    },
  } = hotelDetails

  const locationIcon = {
    airport: <AirportIcon />,
    metro: <TrainStationIcon />,
    'train-station': <TrainStationIcon />,
  }

  return (
    <>
      <BlockTitle title='HOTEL LOCATION' subTitle={fullAddress} />
      <div className={styles.grid}>
        <div className={styles.map}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={{ lat: 40.74725, lng: -73.98776 }}
            defaultZoom={12}
          />
        </div>
        <div className={styles.locations}>
          <div className={styles.title}>Transport and mobility</div>
          {transportLocations &&
            transportLocations.map((transportLocation) => (
              <>
                {transportLocation.locations.map((location) => (
                  <div className={styles.location}>
                    {locationIcon[transportLocation.category]}
                    <div>
                      {location.name}
                      <span
                        className={styles.distance}
                      >{` ${location.distanceInTime}`}</span>
                    </div>
                  </div>
                ))}
              </>
            ))}
        </div>
      </div>
    </>
  )
}

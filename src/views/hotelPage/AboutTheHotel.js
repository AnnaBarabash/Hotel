import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import React from 'react'
import HotelRatingPagination from './HotelRatingPagination'
import HotelDiagram from './HotelDiagram'
import { useSelector } from 'react-redux'

import { getHotelDetails } from '../../store/selectors/hotelSelectors'
import { getHotelReviewsOverall } from '../../store/selectors/hotelSelectors'

import styles from '../hotelPage/AboutTheHotel.module.scss'
import { getHotelReviews } from '../../store/selectors/hotelSelectors'

export function AboutTheHotel() {
  const hotelDetails = useSelector(getHotelDetails)
  const hotelReviews = useSelector(getHotelReviews)

  const { amenities } = hotelDetails
  const hotelFacilities = amenities[0].listItems.filter(
    (el) => el.heading === 'Services' || 'Facilities'
  )
  const foodAndDrink = amenities[0].listItems.find(
    (el) => el.heading === 'Food and drink'
  )
  const thingsToDo = amenities[0].listItems.find(
    (el) => el.heading === 'Things to do'
  )
  const roomFacilities = amenities[1].listItems

  const {
    propertyDescription: { tagline, freebies },
    atAGlance: { keyFacts },
    smallPrint: { policies },
  } = hotelDetails

  const reviews = [...hotelReviews[0].items, ...hotelReviews[1].items]

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <h3>About The Hotel</h3>
      </div>
      <Grid container spacing={2}>
        <div className={styles.listComponentContainer}>
          <Grid item xs={12} md={8}>
            <div>
              <h3>Hotel Description</h3>
              {tagline && <div>{tagline}</div>}
            </div>
            <h3>Hotel Facilities</h3>
            <div className={styles.list}>
              {hotelFacilities.map((facility) => (
                <>
                  {facility.listItems.map((item) => (
                    <div className={styles.listEl}>
                      <span>&#9632;</span>
                      {item}
                    </div>
                  ))}
                </>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Room Facilities</h3>
              {roomFacilities.map((facility) => (
                <>
                  {facility.listItems.map((item) => (
                    <div className={styles.listEl}>
                      <span> &#9632;</span>
                      {item}
                    </div>
                  ))}
                </>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Gastronomy</h3>
              {foodAndDrink.listItems.map((item) => (
                <div className={styles.listEl}>
                  <span>&#9632;</span>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.list}>
              <h3>Leisure and sports</h3>
              {thingsToDo.listItems.map((item) => (
                <div className={styles.listEl}>
                  <span>&#9632;</span>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <h3>Further information about the hotel</h3>
              <div dangerouslySetInnerHTML={{ __html: policies }} />
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <div>
              <h3>Service info</h3>
              {keyFacts && (
                <>
                  <div>{keyFacts.arrivingLeaving}</div>
                  <div>{keyFacts.specialCheckInInstructions}</div>
                </>
              )}
            </div>
            <div>
              <h3>Free For Hotel de guest</h3>
              {freebies && <div>{freebies}</div>}
            </div>
            <div>
              <h3>Payment options</h3>
              {keyFacts && <div>{keyFacts.requiredAtCheckIn}</div>}
            </div>
          </Grid>
        </div>
      </Grid>
    </Box>
  )
}

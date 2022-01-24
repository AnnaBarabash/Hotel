import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import React from 'react'
import { HotelRatingPagination } from './HotelRatingPagination'
import { CircularStatic } from './HotelDiagram'
import { useSelector } from 'react-redux'

import { getHotelDetails } from '../../store/selectors/hotelSelectors'

import styles from '../hotelPage/AboutTheHotelReviews.module.scss'
import { getHotelReviews } from '../../store/selectors/hotelSelectors'

export function AboutTheHotelReviews() {
  const hotelReviews = useSelector(getHotelReviews)
  const reviews = [...hotelReviews[0].items, ...hotelReviews[1].items]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <div>
            <h3>Customer ratings and reviews</h3>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div>
            <h3>Review list</h3>
          </div>
          <div>
            {reviews.map((review) => (
              <div className={styles.reviews}>
                <div className={styles.box}>
                  <div className={styles.badge}>{review.badge}</div>
                  <div className={styles.rating}> {review.rating}</div>
                  <div className={styles.reviewDate}>{review.reviewDate}</div>
                </div>
                <div className={styles.reviewerName}>
                  {review.reviewer.name}
                </div>
                <div className={styles.description}>{review.description}</div>
              </div>
            ))}
          </div>
          <div>
            <HotelRatingPagination />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <h3>Hotel Ratings</h3>
            <CircularStatic />
          </div>
          <div></div>
        </Grid>
      </Grid>
    </Box>
  )
}

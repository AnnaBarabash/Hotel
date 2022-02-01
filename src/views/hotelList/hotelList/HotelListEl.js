import AdjustIcon from '@mui/icons-material/Adjust'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import Rating from '@mui/material/Rating'
import Tooltip from '@mui/material/Tooltip'
import { toLower } from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'

import { getHotelPath } from '../../../routes'
import styles from './HotelListEl.module.scss'

export function HotelListEl(props) {
  const { hotelData } = props

  const { streetAddress, postalCode, locality } = hotelData.address
  const { badgeText, unformattedRating, total } = hotelData.guestReviews

  return (
    <div className={styles.listEl}>
      <div className={styles.grid}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={hotelData.optimizedThumbUrls.srpDesktop}
            alt='hotelImg'
          />
        </div>
        <div className={styles.description}>
          <div className={styles.hotelName}>{hotelData.name}</div>
          <div className={styles.hotelStars}>
            <Rating
              name='rating'
              defaultValue={hotelData.starRating}
              max={Math.ceil(hotelData.starRating)}
              precision={0.5}
              readOnly
            />
          </div>
          <div className={styles.location}>
            <HomeRoundedIcon classes={{ root: styles.icon }} />
            {`${streetAddress}, ${postalCode} ${locality}`}
          </div>
          <Tooltip
            title={`Distance to ${toLower(hotelData.landmarks[0].label)}`}
            placement='bottom-start'
          >
            <div className={styles.location}>
              <AdjustIcon classes={{ root: styles.icon }} />
              {hotelData.landmarks[0].distance}
            </div>
          </Tooltip>
        </div>
        <div className={styles.info}>
          <div className={styles.container}>
            <div className={styles.rating}>
              {badgeText ? (
                <>
                  <div>
                    <span className={styles.badgeText}>{badgeText}</span>
                    <span className={styles.value}>{unformattedRating}</span>
                  </div>
                  <div className={styles.extra}>out of {total} ratings</div>
                </>
              ) : (
                <div className={styles.extra}>No rating available yet</div>
              )}
            </div>
            <Link to={getHotelPath(hotelData.id)} target='_blank'>
              <button className={styles.button}>SHOW ROOMS</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

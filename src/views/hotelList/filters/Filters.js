import React from 'react'

import { Divider } from './Divider'
import styles from './Filters.module.scss'
import { GuestRatingFilter } from './GuestRatingFilter'
import { HotelStarsFilter } from './HotelStarsFilter'
import { TopCriteriaFilter } from './TopCriteriaFilter'

export function Filters() {
  return (
    <div className={styles.filters}>
      <div className={styles.title}>FILTER HOTELS</div>
      <Divider />
      <TopCriteriaFilter />
      <Divider />
      <HotelStarsFilter />
      <Divider />
      <GuestRatingFilter />
    </div>
  )
}

import React from 'react'
import { useSelector } from 'react-redux'

import { TOP_CRITERIAS_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { HOTEL_STARS_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { GUEST_RATING_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { getDraftFilters } from '../../../store/selectors/hotelListSelectors'
import { Divider } from './Divider'
import styles from './Filters.module.scss'
import { GuestRatingFilter } from './GuestRatingFilter'
import { HotelStarsFilter } from './HotelStarsFilter'
import { TopCriteriasFilter } from './TopCriteriasFilter'

export function Filters() {
  const draftFilters = useSelector(getDraftFilters)

  const topCriteriasState =
    draftFilters?.topCriterias || TOP_CRITERIAS_FILTER_INITIAL_STATE
  const hotelStarsState =
    draftFilters?.starRatings || HOTEL_STARS_FILTER_INITIAL_STATE
  const guestRatingState =
    draftFilters?.guestRating || GUEST_RATING_FILTER_INITIAL_STATE

  return (
    <div className={styles.filters}>
      <div className={styles.title}>FILTER HOTELS</div>
      <Divider />
      <TopCriteriasFilter state={topCriteriasState} />
      <Divider />
      <HotelStarsFilter state={hotelStarsState} />
      <Divider />
      <GuestRatingFilter state={guestRatingState} />
    </div>
  )
}

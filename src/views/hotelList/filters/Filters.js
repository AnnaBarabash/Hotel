import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TOP_CRITERIAS_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { HOTEL_STARS_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { GUEST_RATING_FILTER_INITIAL_STATE } from '../../../shared/constants'
import { getDraftFilters } from '../../../store/selectors/hotelListSelectors'
import { hotelListSlice } from '../../../store/slices/hotelListSlice'
import { Divider } from './Divider'
import styles from './Filters.module.scss'
import { GuestRatingFilter } from './GuestRatingFilter'
import { HotelStarsFilter } from './HotelStarsFilter'
import { TopCriteriasFilter } from './TopCriteriasFilter'

export function Filters() {
  const dispatch = useDispatch()

  const draftFilters = useSelector(getDraftFilters)

  useEffect(() => {
    return () => {
      dispatch(
        hotelListSlice.actions.setFilters({
          topCriterias: undefined,
          starRatings: undefined,
          guestRating: undefined,
          page: undefined,
        })
      )
    }
  }, [dispatch])

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

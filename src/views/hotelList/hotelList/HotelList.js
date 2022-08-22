import React from 'react'
import { useSelector } from 'react-redux'

import { SORT_BY } from '../../../shared/constants'
import { getDraftFilters } from '../../../store/selectors/hotelListSelectors'
import { getHotelList } from '../../../store/selectors/hotelListSelectors'
import styles from './HotelList.module.scss'
import { HotelListEl } from './HotelListEl'
import { HotelsPagination } from './HotelsPagination'
import { SortBy } from './SortBy'

export function HotelList() {
  const hotelList = useSelector(getHotelList)
  const draftFilters = useSelector(getDraftFilters)

  const sortBy = draftFilters?.sortBy || SORT_BY[0].key
  const page = draftFilters?.page || 1

  return (
    <div className={styles.container}>
      <SortBy sortBy={sortBy} />
      <HotelsPagination page={page} />
      {hotelList &&
        hotelList.map((hotelData) => (
          <HotelListEl key={hotelData.id} hotelData={hotelData} />
        ))}
      <HotelsPagination page={page} />
    </div>
  )
}

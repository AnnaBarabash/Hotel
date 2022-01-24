import React from 'react'
import { useSelector } from 'react-redux'

import { getHotelList } from '../../../store/selectors/hotelListSelectors'
import { HotelListComponent } from '../SortByListPart/HotelListComponent'
import { SortByHotelDeSuggestion } from '../SortByListPart/SortByHotelDeSuggestion'
import { HotelListPagination } from '../SortByListPart/HotelListPagination'

import styles from './SortByFilter.module.scss'

export function SortByFilter() {
  const hotelList = useSelector(getHotelList)
  console.log(hotelList)

  return (
    <div>
      <div>
        {' '}
        <SortByHotelDeSuggestion />
      </div>
      <div className={styles.hotelListPagination}>
        {' '}
        <HotelListPagination />
      </div>
      <div>
        {hotelList &&
          hotelList.map((hotelData) => (
            <HotelListComponent key={hotelData.id} hotelData={hotelData} />
          ))}
      </div>
    </div>
  )
}

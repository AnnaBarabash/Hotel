import React from 'react'

import { MainFilter } from '../../shared/components/mainFilter/MainFilter'
import { Filters } from './filters/Filters'
import { SortByFilter } from './SortByListPart/SortByFilter'

import { AppContainer } from '../../shared/components/AppContainer'
import styles from './HotelListView.module.scss'

export function HotelListView() {
  return (
    <>
      <MainFilter />
      <AppContainer className={styles.container}>
        <div className={styles.hotelListView}>
          <Filters />
          <div className={styles.sortByFilter}>
            <SortByFilter />
          </div>
        </div>
      </AppContainer>
    </>
  )
}

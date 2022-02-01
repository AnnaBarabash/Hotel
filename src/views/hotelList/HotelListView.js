import Breadcrumbs from '@mui/material/Breadcrumbs'
import Drawer from '@mui/material/Drawer'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { HOME_PATH } from '../../routes'
import { AppContainer } from '../../shared/components/AppContainer'
import { MainFilter } from '../../shared/components/mainFilter/MainFilter'
import { Filters } from './filters/Filters'
import { HotelList } from './hotelList/HotelList'
import styles from './HotelListView.module.scss'

export function HotelListView() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDrawer() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MainFilter />
      <AppContainer className={styles.container}>
        <Breadcrumbs
          aria-label='breadcrumb'
          classes={{ root: styles.breadcrumbs }}
        >
          <Link to={HOME_PATH}>Home</Link>
          <span>Hotels</span>
        </Breadcrumbs>
        <div className={styles.hotelListView}>
          <div className={styles.desktopFilters}>
            <Filters />
          </div>
          <HotelList />
        </div>
        <div className={styles.mobileFilters}>
          <Drawer anchor='left' open={isOpen} onClose={toggleDrawer}>
            <Filters />
          </Drawer>
          <button className={styles.button} onClick={toggleDrawer}>
            FILTER
          </button>
        </div>
      </AppContainer>
    </>
  )
}

import Breadcrumbs from '@mui/material/Breadcrumbs'
import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { HOME_PATH } from '../../routes'
import { AppContainer } from '../../shared/components/AppContainer'
import { getHotelName } from '../../store/selectors/hotelSelectors'
import { About } from './about/About'
import styles from './HotelView.module.scss'
import { Location } from './Location'
import { MainInfo } from './mainInfo/MainInfo'
import { Reviews } from './reviews/Reviews'

export function HotelView() {
  const hotelName = useSelector(getHotelName)

  return (
    <>
      <AppContainer className={clsx(styles.container, styles.top)}>
        <Breadcrumbs
          aria-label='breadcrumb'
          classes={{ root: styles.breadcrumbs }}
        >
          <Link to={HOME_PATH}>Home</Link>
          <span>Hotels</span>
          <span>{hotelName}</span>
        </Breadcrumbs>
      </AppContainer>
      <MainInfo />
      <AppContainer className={clsx(styles.container, styles.main)}>
        <Location />
        <About />
        <Reviews />
      </AppContainer>
    </>
  )
}

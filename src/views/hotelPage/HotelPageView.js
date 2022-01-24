import React from 'react'

import { SimpleSlider } from './SimpleSlider'
import { HotelLocation } from './HotelLocation'
import { AboutTheHotel } from './AboutTheHotel'
import { AboutTheHotelReviews } from './AboutTheHotelReviews'

export default function HotelPageView() {
  return (
    <>
      <div>
        <SimpleSlider />
        <HotelLocation />
        <AboutTheHotel />
        <AboutTheHotelReviews />
      </div>
    </>
  )
}

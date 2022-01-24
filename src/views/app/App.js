import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HOME_PATH, HOTEL_LIST_PATH, HOTEL_PATH } from '../../routes'
import { HomeView } from '../home/HomeView'
import { HotelListView } from '../hotelList/HotelListView'
import HotelPageView from '../hotelPage/HotelPageView'

import './App.css'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME_PATH} element={<HomeView />} />
        <Route path={HOTEL_LIST_PATH} element={<HotelListView />} />
        <Route path={HOTEL_PATH} element={<HotelPageView />} />
      </Routes>
    </Router>
  )
}

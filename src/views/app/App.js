import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { HOME_PATH, HOTEL_LIST_PATH, HOTEL_PATH } from '../../routes'
import { HomeView } from '../home/HomeView'
import { HotelView } from '../hotel/HotelView'
import { HotelListView } from '../hotelList/HotelListView'

import './App.css'

export function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={HOME_PATH} element={<HomeView />} />
        <Route exact path={HOTEL_LIST_PATH} element={<HotelListView />} />
        <Route exact path={HOTEL_PATH} element={<HotelView />} />
        <Route path='*' element={<Navigate to={HOME_PATH} replace />}
      />
      </Routes>
    </Router>
  )
}

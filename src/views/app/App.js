import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HOME_PATH } from '../../routes'
import { HomeView } from '../../views/home/HomeView'
import { Header } from './Header'

import './App.css'

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={HOME_PATH} element={<HomeView />} />
        
      </Routes>
    </Router>
  )
}

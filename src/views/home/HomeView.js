import React from 'react'

import { MainFilter } from '../../shared/components/mainFilter/MainFilter'
import { MainInfo } from './MainInfo'

export function HomeView() {
  return (
    <>
      <MainFilter />
      <MainInfo />
    </>
  )
}

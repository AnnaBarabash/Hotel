import React from 'react'
import { useDispatch } from 'react-redux'

import { homeSlice } from '../../store/slices/homeSlice'

export function HomeView() {
  const dispatch = useDispatch()

  dispatch(homeSlice.actions.setTest('123321321312'))

  return <div>test</div>
}

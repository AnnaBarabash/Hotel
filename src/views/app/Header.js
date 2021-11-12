import React from 'react'
import { Link } from 'react-router-dom'

import { ROOT_PATH, HOME_PATH } from '../../routes'

export function Header() {
  return (
    <>
      <div>Header</div>
      <Link to={ROOT_PATH}>Root</Link>
      <Link to={HOME_PATH}>Home</Link>
    </>
  )
}



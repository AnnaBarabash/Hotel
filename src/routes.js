import { generatePath } from 'react-router'

const HOME_ROUTE = 'home'
const HOTEL_LIST_ROUTE = 'hotels'
const HOTEL_ROUTE = '/:id'

export const ROOT_PATH = '/'
export const HOME_PATH = `${ROOT_PATH}${HOME_ROUTE}`
export const HOTEL_LIST_PATH = `${ROOT_PATH}${HOTEL_LIST_ROUTE}`
export const HOTEL_PATH = `${HOTEL_LIST_PATH}${HOTEL_ROUTE}`

export function getHotelPath(id) {
  return generatePath(HOTEL_PATH, { id })
}

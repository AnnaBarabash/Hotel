import clsx from 'clsx'
import React from 'react'
import { useSelector } from 'react-redux'

import {
  HEADING_HOTEL_FACILITIES,
  HEADING_FOOD_AND_DRINK,
  HEADING_THINGS_TO_DO,
  ASSETS_URL,
} from '../../../shared/constants'
import { getHotelDetails } from '../../../store/selectors/hotelSelectors'
import { BlockTitle } from '../BlockTitle'
import styles from './About.module.scss'
import { Section } from './Section'

export function About() {
  const hotelDetails = useSelector(getHotelDetails)

  const { amenities } = hotelDetails

  const hotelFacilities = amenities[0].listItems
    .filter((el) => HEADING_HOTEL_FACILITIES.includes(el.heading))
    .reduce((acc, el) => [...acc, ...el.listItems], [])

  const roomFacilities = amenities[1].listItems.reduce(
    (acc, el) => [...acc, ...el.listItems],
    []
  )

  const foodAndDrink = amenities[0].listItems.find(
    (el) => el.heading === HEADING_FOOD_AND_DRINK
  ).listItems

  const thingsToDo = amenities[0].listItems.find(
    (el) => el.heading === HEADING_THINGS_TO_DO
  ).listItems

  const {
    propertyDescription: { tagline, freebies },
    atAGlance: { keyFacts },
  } = hotelDetails

  return (
    <div className={styles.container}>
      <BlockTitle title='ABOUT THE HOTEL' hasSeparator />
      <div className={styles.grid}>
        <div
          className={clsx(
            styles.sec11,
            styles.withRightSeparator,
            styles.withBottomSeparator
          )}
        >
          <Section title='HOTEL DESCRIPTION' description={tagline} />
        </div>
        <div className={clsx(styles.sec12, styles.withBottomSeparator)}>
          <Section title='SERVICE INFO'>
            <div className={styles.services}>
              <div>
                <div>{keyFacts.arrivingLeaving[0]}</div>
                <div>{keyFacts.arrivingLeaving[1]}</div>
              </div>
              {keyFacts.specialCheckInInstructions && (
                <div>
                  <div className={styles.specialInstructions}>
                    Special Instructions:
                  </div>
                  {keyFacts.specialCheckInInstructions.map((el) => (
                    <div>{el}</div>
                  ))}
                </div>
              )}
            </div>
          </Section>
        </div>
        <div
          className={clsx(
            styles.sec21,
            styles.withRightSeparator,
            styles.withBottomSeparator
          )}
        >
          <Section title='HOTEL FACILITIES' list={hotelFacilities} />
          <Section title='ROOM FACILITIES' list={roomFacilities} />
          <Section title='GASTRONOMY' list={foodAndDrink} />
          <Section title='LEISURE AND SPORTS' list={thingsToDo} />
        </div>
        <div className={clsx(styles.sec22, styles.withBottomSeparator)}>
          {freebies && (
            <Section title='FREE FOR HOTEL NY GUEST'>
              <div className={styles.services}>
                {freebies.map((el) => (
                  <div>{el}</div>
                ))}
              </div>
            </Section>
          )}
          <Section title='PAYMENT OPTIONS'>
            <div className={styles.payment}>
              <img
                src={`${ASSETS_URL}/booking/js/d6ad805375080260e205a06f4b20ab25.svg`}
                alt='Visa'
              />
              <img
                src={`${ASSETS_URL}/booking/js/94e5549c8160e8f8f8c5a244be971ff1.svg`}
                alt='MasterCard'
              />
              <img
                src={`${ASSETS_URL}/booking/js/7d19e2386b46522e565ea7987fefe3b0.svg`}
                alt='American Express'
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

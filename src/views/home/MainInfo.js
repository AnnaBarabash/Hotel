import * as React from 'react'

import { AppContainer } from '../../shared/components/AppContainer'
import bannerSrc from '../../static/images/ed462f60dfb8cdee3ae8588d9e145909.jpg';
import styles from './MainInfo.module.scss'

export function MainInfo() {
  return (
    <AppContainer className={styles.container}>
      <div className={styles.banner}>
        <img src={bannerSrc} alt='Banner' />
      </div>
      <div className={styles.info}>
        <h3>HOTELS OFFERS FROM HOTEL INFO</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget dolor
          morbi non arcu risus quis varius. Id aliquet lectus proin nibh nisl
          condimentum id venenatis. Auctor neque vitae tempus quam pellentesque
          nec nam aliquam.{' '}
        </p>
        <h3>SEARCH FOR HOTELS FOR YOUR NEXT BUSINESS TRIP OR HOLIDAY</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>HOTEL OFFERS IN THE NEW YORK</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <h3>HOTEL REVIEWS IN NEW YORK</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h3>APP FOR YOUR HOTEL SEARCH</h3>
        <p>
          Nibh mauris cursus mattis molestie a. Rutrum quisque non tellus orci
          ac auctor augue mauris augue. Nibh venenatis cras sed felis eget velit
          aliquet. Risus sed vulputate odio ut. Risus viverra adipiscing at in
          tellus integer feugiat scelerisque varius. Nam at lectus urna duis
          convallis convallis tellus. Blandit aliquam etiam erat velit. Quam
          viverra orci sagittis eu volutpat. Proin sagittis nisl rhoncus mattis
          rhoncus urna neque.
        </p>
        <h3>FIND BEST HOTELS IN NEW YORK</h3>
        <p>
          Nibh mauris cursus mattis molestie a. Rutrum quisque non tellus orci
          ac auctor augue mauris augue. Nibh venenatis cras sed felis eget velit
          aliquet. Risus sed vulputate odio ut. Risus viverra adipiscing at in
          tellus integer feugiat scelerisque varius.
        </p>
      </div>
    </AppContainer>
  )
}

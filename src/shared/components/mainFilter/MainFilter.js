import Grid from '@mui/material/Grid'

import { PERSONS_COUNTER, ROOMS_COUNTER } from '../../constants'
import { AppContainer } from '../AppContainer'
import { Counter } from './Counter'
import { DateRangePicker } from './DateRangePicker'
import styles from './MainFilter.module.scss'
import { SearchButton } from './SearchButton'

export function MainFilter() {
  return (
    <>
      <a href='http://localhost:3000/home' className={styles.logoLink}>
        <img
          className={styles.img}
          src='https://www.hotel.info/assets/booking/images/logo.png'
          alt='logo'
        />
      </a>
      <div className={styles.container}>
        <AppContainer>
          <div className={styles.filter}>
            <Grid container columnSpacing={4}>
              <Grid xs={12} lg={3} item>
                <DateRangePicker />
              </Grid>
              <Grid
                xs={12}
                lg={6}
                item
                classes={{ root: styles.countersWrapper }}
              >
                <Counter type={ROOMS_COUNTER} />
                <Counter type={PERSONS_COUNTER} />
              </Grid>
              <Grid xs={12} lg={3} item>
                <SearchButton />
              </Grid>
            </Grid>
          </div>
        </AppContainer>
      </div>
    </>
  )
}

import Grid from '@mui/material/Grid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { HOME_PATH, HOTEL_LIST_PATH } from '../../../routes'
import { getDraftFilters } from '../../../store/selectors/hotelListSelectors'
import { PERSONS_COUNTER, ROOMS_COUNTER } from '../../constants'
import { AppContainer } from '../AppContainer'
import { Counter } from './Counter'
import { DateRangePicker } from './DateRangePicker'
import styles from './MainFilter.module.scss'
import { SearchButton } from './SearchButton'

export function MainFilter() {
  const draftFilters = useSelector(getDraftFilters)
  const navigate = useNavigate()

  const dates = draftFilters?.dates
    ? [draftFilters.dates.checkIn, draftFilters.dates.checkOut]
    : [null, null]
  const rooms = draftFilters?.rooms || 1
  const persons = draftFilters?.persons || 1

  const isSearchEnabled = dates.every((el) => el) && rooms > 0 && persons > 0

  function onSearch() {
    navigate(HOTEL_LIST_PATH)
  }

  return (
    <>
      <Link to={HOME_PATH} className={styles.logoLink}>
        <span>HOTEL</span> NY
      </Link>
      <div className={styles.container}>
        <AppContainer>
          <div className={styles.promo}>Book hotels quickly and easily on <span>HOTEL NY</span></div>
          <div className={styles.filter}>
            <Grid container columnSpacing={4}>
              <Grid xs={12} lg={3} item>
                <DateRangePicker value={dates} />
              </Grid>
              <Grid
                xs={12}
                lg={6}
                item
                classes={{ root: styles.countersWrapper }}
              >
                <Counter type={ROOMS_COUNTER} count={rooms} />
                <Counter type={PERSONS_COUNTER} count={persons} />
              </Grid>
              <Grid xs={12} lg={3} item>
                <SearchButton isEnabled={isSearchEnabled} onSearch={onSearch} />
              </Grid>
            </Grid>
          </div>
          <div className={styles.hoatline}>
            <div className={styles.content}>
              <div>24H service hotline</div>
              <div className={styles.number}>+100 - 100 100 22</div>
            </div>
          </div>
        </AppContainer>
      </div>
    </>
  )
}

import clsx from 'clsx'
import { upperFirst } from 'lodash';
import React from 'react'
import { useSelector } from 'react-redux'

import { RATING_ASPECTS } from '../../../shared/constants';
import { getHotelReviews, getHotelReviewsOverall } from '../../../store/selectors/hotelSelectors'
import { BlockTitle } from '../BlockTitle'
import { CircularProgressWithLabel } from './CircularProgressWithLabel'
import { LinearProgressWithLabel } from './LinearProgressWithLabel'
import styles from './Reviews.module.scss'
import { ReviewsPagination } from './ReviewsPagination'
import { Section } from './Section'

export function Reviews() {
  const hotelReviews = useSelector(getHotelReviews)
  const hatelReviewsOverall = useSelector(getHotelReviewsOverall)
  
  const reviews = [...hotelReviews[0].items, ...hotelReviews[1].items]
  const { rating, badgeText, total, ratingAspects } = hatelReviewsOverall

  return (
    <div className={styles.container}>
      <BlockTitle title='CUSTOMER RATING AND REVIEWS' hasSeparator />
      <div className={styles.grid}>
        <div
          className={clsx(
            styles.sec11,
            styles.withRightSeparator
          )}
        >
          <Section title='REVIEW LIST'>
            <div className={styles.reviews}>
              {reviews.map((review) => (
                <div className={styles.review}>
                  <div className={styles.info}>
                    <div>
                      <span className={styles.badge}>{review.badge}</span>
                      <span className={styles.rating}>{review.rating}</span>
                    </div>
                    <div>{review.reviewDate}</div>
                  </div>
                  <div className={styles.reviewer}>
                    {review.reviewer.name || '—'}
                  </div>
                  <div className={styles.description}>{review.description}</div>
                </div>
              ))}
            </div>
            <ReviewsPagination />
          </Section>
        </div>
        <div className={styles.sec12}>
          <Section title='HOTEL RATINGS'>
            <div className={styles.ratings}>
              <div>
                <CircularProgressWithLabel value={92} />
              </div>
              <div>
                <div className={styles.overallRating}>
                  <span className={styles.rating}>{badgeText}</span>
                  <span className={styles.label}>{`out of ${total} ratings`}</span>
                </div>
                <LinearProgressWithLabel value={rating} />
              </div>
              {RATING_ASPECTS.map((aspect) => (
                <div>
                  <div>{upperFirst(aspect)}</div>
                  <LinearProgressWithLabel value={ratingAspects[aspect]} />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

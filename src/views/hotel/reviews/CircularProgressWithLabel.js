import CircularProgress from '@mui/material/CircularProgress'
import * as React from 'react'

import styles from './CircularProgressWithLabel.module.scss'

export function CircularProgressWithLabel(props) {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <CircularProgress
          variant='determinate'
          classes={{ colorPrimary: styles.colorPrimary }}
          value={props.value}
          size={120}
          thickness={6}
        />
        <div className={styles.value}>
          {props.value}%
        </div>
      </div>
      <div className={styles.label}>Of all hotel guests recommend this hotel</div>
    </div>
  )
}

import LinearProgress from '@mui/material/LinearProgress'
import * as React from 'react'

import styles from './LinearProgressWithLabel.module.scss'

export function LinearProgressWithLabel(props) {
  return (
    <div className={styles.container}>
      <LinearProgress
        variant='determinate'
        value={props.value * 10}
        classes={{
          determinate: styles.progressBar,
          bar1Determinate: styles.bar1Determinate,
          colorPrimary: styles.colorPrimary,
        }}
      />
      <div className={styles.label}>
        {props.value}
      </div>
    </div>
  )
}

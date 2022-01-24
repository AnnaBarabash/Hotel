import clsx from 'clsx'

import styles from './AppContainer.module.scss'

export function AppContainer(props) {
  return (
    <div className={clsx(styles.container, props.className)}>
      {props.children}
    </div>
  )
}

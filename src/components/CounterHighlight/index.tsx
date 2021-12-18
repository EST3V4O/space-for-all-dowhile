interface CounterHighlightProps {
  labelNumber: string | number;
  children: ReactNode;
}

import { ReactNode } from 'react'
import styles from './styles.module.scss'

export function CounterHighlight({ children, labelNumber }: CounterHighlightProps) {
  return (
    <div className={styles.container}>
      <h3>{labelNumber}</h3>
      <p>{children}</p>
    </div>
  )
}
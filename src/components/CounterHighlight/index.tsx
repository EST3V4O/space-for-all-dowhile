interface CounterHighlightProps {
  labelNumber: string | number;
  content: string;
}

import styles from './styles.module.scss'

export function CounterHighlight({ content, labelNumber }: CounterHighlightProps) {
  return (
    <div className={styles.container}>
      <h3>{labelNumber}</h3>
      <p>{content}</p>
    </div>
  )
}
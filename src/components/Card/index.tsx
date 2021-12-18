/* eslint-disable @next/next/no-img-element */

import styles from './styles.module.scss'

interface CardProps {
  iconPath: string;
  iconAlt: string;
  label: string;
  arrowEnd?: boolean;
  arrowOnMobile?: boolean;
}

export function Card({ iconPath, iconAlt, label, arrowEnd = false }: CardProps)  {
  return (
    <div className={styles.container}>
      <div>
        <img src={iconPath} alt={iconAlt} />
      </div>
      <span>{label}</span>
      { arrowEnd && (
        <img
          src="/images/arrow-right.svg"
          alt="Seta para direita"
          className={arrowEnd && styles.arrowEnd}
        />
      ) }
    </div>
  )
}
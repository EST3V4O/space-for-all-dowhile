/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

interface CourseCardProps {
  nameOfCourse: string;
  company: string;
  iconPath: string;
  altIcon: string;
  includeOnCourse: string[];
}

export function CourseCard({ altIcon, company, iconPath, includeOnCourse, nameOfCourse }: CourseCardProps) {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <div>
          <h3>{nameOfCourse}</h3>
          <img src={`/images/${iconPath}`} alt={altIcon} />
        </div>
        <h4>{company}</h4>
      </section>
      <ul className={styles.content}>
        { includeOnCourse.map((label) => (
          <li key={label}>
            <img src="/images/check.svg" alt="Check" />
            <span>{label}</span>
          </li>
        )) }
      </ul>
      <button type="button">
        INSCREVA-SE 
      </button>
    </div>
  )
}
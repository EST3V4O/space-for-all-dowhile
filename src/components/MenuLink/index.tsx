import Link from "next/link";

import styles from './styles.module.scss'

interface MenuLinkProps {
  label: string;
  href: string;
  handleClick: (forTitle: string) => void;
  labelForTitle: string;
}

export function MenuLink({ handleClick, href, label, labelForTitle }: MenuLinkProps) {
  return (
    <li
      onClick={() => handleClick(labelForTitle)}
      className={styles.container}
    >
      <Link href={href}>
        <a>{label}</a>
      </Link>
    </li>
  )
}
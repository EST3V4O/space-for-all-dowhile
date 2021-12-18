import Link from "next/link";
import { ReactNode } from "react";

import styles from './styles.module.scss'

interface MenuLinkProps {
  children: ReactNode;
  href: string;
  handleClick: (forTitle: string) => void;
  labelForTitle: string;
}

export function MenuLink({ handleClick, href, children, labelForTitle }: MenuLinkProps) {
  return (
    <li
      onClick={() => handleClick(labelForTitle)}
      className={styles.container}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}
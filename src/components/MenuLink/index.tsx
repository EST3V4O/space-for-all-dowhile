import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import styles from './styles.module.scss'

interface MenuLinkProps {
  children: ReactNode;
  href: string;
  handleClick: (forTitle: string) => void;
  labelForTitle: string;
}

export function MenuLink({ handleClick, href, children, labelForTitle }: MenuLinkProps) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const link = href.split("#")[1]
    const unregister = () =>  {
      const { scrollHeight, offsetTop } = document.querySelector<HTMLElement>(`section[id='${link}']`)

      const discountMenu = offsetTop - 85
      const elementHeightScroll = discountMenu + scrollHeight

      if(window.innerWidth > 768) {
        if(window.scrollY >= discountMenu && window.scrollY <= elementHeightScroll) {
          if(!active) {
            setActive(true)
            handleClick(labelForTitle)
          }
        } else {
          setActive(false)
        }
      }
    }
    window.addEventListener("scroll", unregister)

    return () => window.removeEventListener("scroll", unregister)
  }, [href, active, labelForTitle, handleClick])

  useEffect(() => {
    if(!window.location.href.includes("#") && href === "#home") {
      setActive(true)
      window.location.href = href
      return 
    }

    if(window.location.href === href) {
      setActive(true)
    }
  }, [href])

  return (
    <li
      onClick={() => handleClick(labelForTitle)}
      className={styles.container}
    >
      <Link href={href}>
        <a className={active ? styles.active : ""} >{children}</a>
      </Link>
    </li>
  )
}
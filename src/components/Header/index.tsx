/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MenuLink } from '../MenuLink'

import styles from './styles.module.scss'

export function Header()  {
  const [activeTitle, setActiveTitle] = useState("Levando quem precisa ao espaço");
  const [isMobile, setIsMobile] = useState(false)
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [hasScroll, setHasScroll] = useState(false)

  function handleClickOnLink(title: string) {
    setActiveTitle(title)
    if(activeMobileMenu) {
      setActiveMobileMenu(!activeMobileMenu)
    }
  }

  useEffect(() => {
    window.onload = () => {
      if(window.innerWidth <= 768) {
        setIsMobile(true)
        setActiveMobileMenu(false)
      } else {
        setIsMobile(false)
        setActiveMobileMenu(false)
      }
    }

    return () => {
      window.onload = null
    }
  }, [])

  useEffect(() => {
    const unregister = () => {
      if(window.innerWidth <= 768) {
        setIsMobile(true)
        setActiveMobileMenu(false)
      } else {
        setIsMobile(false)
        setActiveMobileMenu(false)
      }
    }

    window.addEventListener("resize", unregister)

    return () => window.removeEventListener("resize", unregister)
  }, [])

  useEffect(() => {
    const unregister = () => {
      if(window.scrollY === 0) {
        setHasScroll(false)
      }

      if (!hasScroll && window.scrollY > 0) {
        setHasScroll(true)
      } else {
        return
      }
    }

    window.addEventListener("scroll", unregister)

    return () => window.removeEventListener("scroll", unregister)
  }, [hasScroll])

  const headerClassNames = `${styles.header} ${isMobile && styles.headerMobile} ${hasScroll && styles.headerOnScroll}`

  return (
    <>
      <Head>
        <title>Space ForAll - {activeTitle}</title>
      </Head>
      <header className={headerClassNames}>
        <section>
          <Link href="#">
            <a>
              <img src="/images/logo.svg" alt="Space ForAll" />
            </a>
          </Link>

          { !isMobile && (
            <>
              <nav className={styles.navigation}>
                <ul>
                  <MenuLink
                    href="#"
                    handleClick={handleClickOnLink}
                    labelForTitle="Levando quem precisa ao espaço"
                    label="Início"
                  />
                  <MenuLink
                    href="#project"
                    handleClick={handleClickOnLink}
                    labelForTitle="Base de lançamento"
                    label="O projeto"
                  />
                  <MenuLink
                    href="#participate"
                    handleClick={handleClickOnLink}
                    labelForTitle="Seleção de astronautas"
                    label="Como participar"
                  />
                  <MenuLink
                    href="#courses"
                    handleClick={handleClickOnLink}
                    labelForTitle="Olhando para o espaço"
                    label="Cursos"
                  />
                </ul>
              </nav>
              <button type="button">
                INSCREVA-SE
              </button>
            </>
          )}

          { isMobile && !activeMobileMenu && (
            <button
              className={styles.mobile}
              type="button"
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            >
              <img src="/images/hamburger-mobile.svg" alt="Hamburger" />
            </button>
          )}

          { isMobile && activeMobileMenu && (
            <button
              className={styles.mobile}
              type="button"
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            >
              <img src="/images/close.svg" alt="Fechar" />
            </button>
          ) }          
        </section>

        { activeMobileMenu && (
          <nav className={styles.mobileMenu}>
            <ul>
              <MenuLink
                href="#"
                handleClick={handleClickOnLink}
                labelForTitle="Levando quem precisa ao espaço"
                label="Início"
              />
              <MenuLink
                href="#project"
                handleClick={handleClickOnLink}
                labelForTitle="Base de lançamento"
                label="O projeto"
              />
              <MenuLink
                href="#participate"
                handleClick={handleClickOnLink}
                labelForTitle="Seleção de astronautas"
                label="Como participar"
              />
              <MenuLink
                href="#courses"
                handleClick={handleClickOnLink}
                labelForTitle="Olhando para o espaço"
                label="Cursos"
              />
            </ul>
          </nav>
        ) }
      </header>
    </>
  )
}
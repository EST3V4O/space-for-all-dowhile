import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
              <Image src="/images/logo.svg" alt="Space ForAll" width="100%" height="100%" />
            </a>
          </Link>

          { !isMobile && (
            <>
              <nav className={styles.navigation}>
                <ul>
                  <MenuLink
                    href="#home"
                    handleClick={handleClickOnLink}
                    labelForTitle="Levando quem precisa ao espaço"
                  >
                    Início
                  </MenuLink>
                  <MenuLink
                    href="#project"
                    handleClick={handleClickOnLink}
                    labelForTitle="Base de lançamento"
                  >
                    O projeto
                  </MenuLink>
                  <MenuLink
                    href="#participate"
                    handleClick={handleClickOnLink}
                    labelForTitle="Seleção de astronautas"
                  >
                    Como participar
                  </MenuLink>
                  <MenuLink
                    href="#courses"
                    handleClick={handleClickOnLink}
                    labelForTitle="Olhando para o espaço"
                  >
                    Cursos
                  </MenuLink>
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
              <Image src="/images/hamburger-mobile.svg" alt="Abrir menu" width={35} height={40} />
            </button>
          )}

          { isMobile && activeMobileMenu && (
            <button
              className={styles.mobile}
              type="button"
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
            >
              <Image src="/images/close.svg" alt="Fechar menu" width={25} height={20} />
            </button>
          ) }          
        </section>

        { activeMobileMenu && (
          <nav className={styles.mobileMenu}>
            <ul>
              <MenuLink
                href="#home"
                handleClick={handleClickOnLink}
                labelForTitle="Levando quem precisa ao espaço"
              >
                Início
              </MenuLink>
              <MenuLink
                href="#project"
                handleClick={handleClickOnLink}
                labelForTitle="Base de lançamento"
              >
                O projeto
              </MenuLink>
              <MenuLink
                href="#participate"
                handleClick={handleClickOnLink}
                labelForTitle="Seleção de astronautas"
              >
                Como participar
              </MenuLink>
              <MenuLink
                href="#courses"
                handleClick={handleClickOnLink}
                labelForTitle="Olhando para o espaço"
              >
                Cursos
              </MenuLink>
            </ul>
          </nav>
        ) }
      </header>
    </>
  )
}
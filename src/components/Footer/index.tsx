/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <section>
          <img src="/images/logo.svg" alt="Space ForAll" />
          <p>©2021 Space ForAll</p>
          <p>Todos os direitos reservados</p>
        </section>
        <Link href="#">
          <a>
            <img src="/images/arrow-up.svg" alt="Voltar ao topo" />
          </a>
        </Link>
      </div>
    </footer>
  )
}
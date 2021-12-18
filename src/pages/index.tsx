/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { CounterHighlight } from '../components/CounterHighlight'

import { Header } from '../components/Header'
import { Card } from '../components/Card'

import styles from '../styles/home.module.scss'
import { CourseCard } from '../components/CourseCard'
import Link from 'next/link'
import { Footer } from '../components/Footer'

export default function Home() {

  const igniteIncludes = ["Backend", "Frontend", "Mobile", "Métodos Ágeis"]
  const dataScienceIncludes = ["Banco de dados", "Machine Learning", "Ciência de dados", "Métodos Ágeis"]
  const designIncludes = ["UI", "UX", "Photoshop", "Métodos Ágeis"]

  return (
    <>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.home} id='home'>
          <img src="/images/fundo.png" alt="Fundo Home" />
          <section>
            <img src="/images/planets.svg" alt="Planeta" />
            <div className={styles.homeContent}>
              <h2>Levando <span>quem precisa</span> ao espaço</h2>
              <div>Oportunidade de estudo e trabalho</div>
              <p>
                Em parceria com empresas de educação oferecemos cursos pagos com
                formações de grande empregabilidade para pessoas carentes, começando
                a pagar apenas quando estiver trabalhando.
              </p>
              <button type="button">
                EMBARCAR NO FOGUETE
              </button>
            </div>
            <img src="/images/rocket.svg" alt="Planeta" />
          </section>
        </section>

        <div className={styles.divider} />

        <section className={`${styles.container} ${styles.launchBase}`} id="project">
          <div>
            <h2>Base de lançamento</h2>
            <p>
              O projeto é uma <strong>causa social</strong> que patrocina o conhecimento e evolução de pessoas carentes por meio do  <strong>Modelo de Sucesso Compartilhado</strong>, disponibilizando acesso a <strong>formações de qualidade</strong> oferecidas por empresas comprometidas com a educação. 
              Com a sua formação garantida <strong>as melhores oportunidades no mercado de trabalho são abertas</strong> e nós te acompanhamos por todo o processo na busca de emprego contando com <strong>a ajuda de empresas parceiras.</strong>
            </p>
          </div>
          <div className={styles.highlights}>
            <CounterHighlight
              labelNumber={1}
            >
              Você não paga nada enquanto não possuir uma <strong>remuneração mínima de R$ 3.000,00 por mês.</strong>
            </CounterHighlight>
            <div>
              <CounterHighlight
                labelNumber={2}
              >
                Conquistando a remuneração mínima, <strong>você passará a pagar mensalmente uma parcela negociável, </strong> relativa ao curso.
              </CounterHighlight>
              <CounterHighlight
                labelNumber={3}
              >
                Caso pare de trabalhar ou tenha a renda abaixo do mínimo, <strong>o pagamento é suspenso</strong> e nos comprometemos em lhe dar apoio.
              </CounterHighlight>
            </div>
            <img src="/images/launch-base.svg" alt="Base de lançamento" />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={`${styles.container} ${styles.selectAstronaut}`} id="participate">
          <div>
            <div>
              <h2>Seleção de astronautas</h2>
              <p>
                A seleção dos alunos será feita com base em seu perfil, priorizando
                os que <strong>moram no Brasil</strong> e em <strong>situação de pobreza.</strong>
              </p>
              <p>
                <strong>Não é necessário ter qualquer conhecimento prévio</strong> para se inscrever,
                apenas cumprir os critérios abaixo:
              </p>
            </div>
            <div>
              <img src="/images/astronaut.svg" alt="Astronauta" />
            </div>
          </div>
          <div>
            <Card
              iconAlt="Chapéu de formando"
              iconPath="/images/hat.svg"
              label="Ensino médio"
              arrowEnd
            />
            <Card
              iconAlt="Chapéu de formando"
              iconPath="/images/legal-age.svg"
              label="Maior de idade"
            />
            <Card
              iconAlt="Coração"
              iconPath="/images/heart.svg"
              label="Comprometimento"
              arrowEnd
            />
            <Card
              iconAlt="Relógio"
              iconPath="/images/clock.svg"
              label="Disponibilidade"
            />
          </div>
        </section>

        <div className={styles.divider} />

        <section className={`${styles.container} ${styles.lookingSpace}`} id="courses">
          <div>
            <img src="/images/stars.svg" alt="Estrelas" />
            <div>
              <img src="/images/telescope.svg" alt="Telescopio" />
              <section>
                <h2>Olhando para o espaço</h2>
                <p>
                  Escolha entre cursos de diferentes áreas <strong>com formações completas
                  <br />com foco no mercado de trabalho.</strong>
                </p>
              </section>
            </div>
          </div>
          <section>
            <CourseCard
              nameOfCourse='Ignite'
              company='Rocketseat'
              iconPath='ignite.svg'
              altIcon='Ignite'
              includeOnCourse={igniteIncludes}
            />
            <CourseCard
              nameOfCourse='Data Science'
              altIcon='Data Science'
              iconPath='data-science.svg'
              company='Alura'
              includeOnCourse={dataScienceIncludes}
            />
            <CourseCard
              nameOfCourse='Design'
              company='Digital House'
              iconPath='design.svg'
              altIcon='Design'
              includeOnCourse={designIncludes}
            />
          </section>
        </section>

        <div className={styles.divider} />

        <section className={`${styles.container} ${styles.buildingRocket}`}>
          <img src="/images/building-rocket.svg" alt="Construindo foguetes" />
          <div>
            <h2>Como construir foguetes para levar quem precisa ao futuro?</h2>
            <p>
              Estamos comprometidos em impactar a vida de quem precisa e contamos
              com a ajuda de empresas na área da educação para reunir cursos com
              conteúdos de qualidade formando futuros astronautas. <Link href="#">
                <a>Transforme avida de quem poderá transformar o mundo.</a>
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

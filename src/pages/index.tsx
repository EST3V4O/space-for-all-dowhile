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

  return (
    <>
      <Header />

      <main className={styles.mainContent}>
        <section className={styles.home} id='#'>
          <img src="/images/fundo.png" alt="Fundo tetra" />
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
              O projeto tem como proposta patrocinar o conhecimento para pessoas
              carentes disponibilizando acesso a conteúdos pagos de qualidade
              focado no mercado de trabalho e oferecidos por empresas de auto
              renome. Utilizando do Modelo de Sucesso Compartilhado, que consiste
              no indivíduo pagar pela formação apenas quando estiver trabalhando
              e recebendo uma remuneração mínima. Assim o aluno, após a conclusão
              do curso, será direcionado a empresas parceiras, onde sendo contratado,
              poderá pagar pelo conteúdo sustentando o projeto.
            </p>
          </div>
          <div className={styles.highlights}>
            <CounterHighlight
              labelNumber={1}
              content="O aluno não paga nada enquanto não possuir uma remuneração
              mínima de R$ 3.000,00 por mês."
            />
            <div>
              <CounterHighlight
                labelNumber={2}
                content="A partir do momento que é atingido essa remuneração mínima, o
                aluno passará a pagar mensalmente uma porcentagem, relativa ao
                curso, da sua remuneração."
              />
              <CounterHighlight
                labelNumber={3}
                content="Caso o aluno pare de trabalhar ou tenha a renda abaixo do mínimo,
                o pagamento é suspenso. Demonstrando o comprometimento que temos
                com o sucesso das pessoas que confiam no projeto."
              />
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
                os que moram no Brasil e em situação de pobreza.
              </p>
              <p>
                Não é necessário ter qualquer conhecimento prévio para se inscrever,
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
                  Escolha entre cursos de diferentes áreas com formações completas
                  <br />com foco no mercado de trabalho.
                </p>
              </section>
            </div>
          </div>
          <section>
            <CourseCard
              altIcon='Ignite'
              company='Rocketseat'
              iconPath='ignite.svg'
              includeOnCourse={igniteIncludes}
              nameOfCourse='Ignite'
            />
            <CourseCard
              altIcon='Ignite'
              company='Rocketseat'
              iconPath='ignite.svg'
              includeOnCourse={igniteIncludes}
              nameOfCourse='Ignite'
            />
            <CourseCard
              altIcon='Ignite'
              company='Rocketseat'
              iconPath='ignite.svg'
              includeOnCourse={igniteIncludes}
              nameOfCourse='Ignite'
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

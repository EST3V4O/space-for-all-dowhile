import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="favicon.png" type="image/png" />

          <meta name="description" content="Em parceria com empresas de educação oferecemos cursos pagos com formações de grande empregabilidade para pessoas carentes, começando a pagar apenas quando estiver trabalhando." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
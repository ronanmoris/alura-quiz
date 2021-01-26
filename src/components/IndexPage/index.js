import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Alura Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Alura Quiz" key="title" />
        <meta property="og:image" content={db.bg} key="image" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}

export default IndexPage
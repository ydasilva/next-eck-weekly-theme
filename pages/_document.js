import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render(){
    return(
      <html lang="en">
        <Head>
          <meta name="description" content="A SPA that fetches the theme of the current week and displays it nicely"/>
          <meta charSet="utf-8"/>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya:400,700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body{
            font-family: 'Alegreya', serif;
          }
        `}</style>
      </html>
    )
  }
}

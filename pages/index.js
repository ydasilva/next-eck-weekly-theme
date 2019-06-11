import EckCard from '../components/EckCard';
import Head from 'next/head';

const targetUrl = "https://www.eck-ghana.org/eck_ws.php";

export default () => (
  <div className="eck">
    <Head>
      <title>ECK LSS Theme</title>
    </Head>
    <div className="cardArea">
      <EckCard/>
    </div>
    <div className="love">
      <h4 className="chelaMargin">
        Made with ❤️ by a chela | <a className="source" href={targetUrl} target="_blanc">Source</a>
      </h4>
    </div>

    <style jsx>{`
      .source{text-decoration: none; color: #343434;cursor: pointer;}
      .chelaMargin{
        margin: 0 !important;
        padding-bottom: 10px;
      }
      .eck{
        display: grid;
        grid-template-rows: 50vh 50vh;
        grid-template-areas:
          "cardArea"
          "love";
      }
      .cardArea{
        grid-area: cardArea;
        align-self: center;
        text-align: center;
      }
      .love {
        grid-area: love;
        justify-self: center;
        align-self: end;
        background: white;
        color: #343434;
        font-family: 'Alegreya', serif;
      }
      @media (max-width: 430px) {
        .cardArea{
          align-self: start;
        }
      }
    `}</style>

    <style global jsx>{`
      body {
        margin: 0;
        background:url('../static/images/eckbackground.png');
      }
    `}</style>
  </div>
)

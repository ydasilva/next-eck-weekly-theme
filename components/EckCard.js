import { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
var html2json = require('html2json').html2json;
var sanitizeHtml = require('sanitize-html');

const corsProxyUrl = "https://pacific-harbor-53496.herokuapp.com/";
// const corsProxyUrl = "https://crossorigin.me/";
const targetUrl = "https://www.eck-ghana.org/eck_ws.php";

export default class EckCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showQuote: false,
        eckData: null
    };

    fetch(corsProxyUrl+targetUrl)
      .then(res => res.text())
      .then( data => {
        console.log("started work - state is null");
        const tab1 = data.lastIndexOf("tab1");
        const tab2 = data.lastIndexOf("tab2");
        console.log("tab1 is: " + tab1 + " and tab2 is: " + tab2);
        const data2 = data.slice(tab1,tab2);
        const data3 = data2.slice(6, (data2.length-32));
        var cleandata = sanitizeHtml(data3);
        const json = html2json(cleandata);
        // console.log(json);
        // console.log("date:   ",json.child[0].child[1].child[0].text);
        // console.log("theme:  ",json.child[0].child[2].child[1].child[0].child[0].text);
        // console.log("book:   ",json.child[0].child[3].child[1].child[0].child[0].text);
        // console.log("author: ",json.child[0].child[4].child[1].child[0].text);
        // console.log("quote:  ",json.child[0].child[5].child[1].child[0].child[0].text);
        // console.log("     by:",json.child[0].child[5].child[1].child[2].child[0].text);

        const finalData = {
          "date"  : json.child[0].child[1].child[0].text,
          "theme" : json.child[0].child[2].child[1].child[0].child[0].text,
          "quote" : json.child[0].child[5].child[1].child[0].child[0].text,
          "by"    : json.child[0].child[5].child[1].child[2].child[0].text
        };

        this.setState({eckData: finalData});
        console.log("finished work - state is ready");
      })
      .catch(err => console.error(err));

  }

  toggleQuote = () => {
    this.setState({showQuote: !this.state.showQuote});
  }

  render(){
    const { data } = this.props;

    return (
      <div>
        <span className="halfWhite title">ECK Light and Sound Service</span>
        <br/>
        <span className="halfWhite subtitle">Theme and Quote Of The Week</span>
        <br/><br/>
        <div className="card">
          <div className={this.state.showQuote?"whiteBG hide":"whiteBG"}>
            <h4 className="date">{this.state.eckData ? this.state.eckData.date : "Loading..."}</h4>
            <div className="themeContainer">
              <div className="themeRightShift"></div>
              <h2>THEME</h2>
              <div className="themeLeftShift"></div>
            </div>
            <div className="content">
              <h1 className="noMargin">{this.state.eckData ? this.state.eckData.theme : "Loading..."}</h1>
            </div>
            <button onClick={this.toggleQuote} className="eckButton">Show Quote</button>
          </div>

          <div className={this.state.showQuote?"quoteBG":"quoteBG hide"}>
            <h4 className="date">{this.state.eckData ? this.state.eckData.date : "Loading..."}</h4>
            <div className="themeContainer">
              <div className="themeRightShift"></div>
              <h2>QUOTE</h2>
              <div className="themeLeftShift"></div>
            </div>
            <div className="content">
              <p className="noMargin">
                  {this.state.eckData ? this.state.eckData.quote : "Loading..."}
               </p>
               <h5 className="noMargin">
               {this.state.eckData ? this.state.eckData.by : "Loading..."}
               </h5>
            </div>
            <button onClick={this.toggleQuote} className="eckButton">Show Theme</button>
          </div>
        </div>

        <style jsx>{`
          .title{
            font-weight: bold;
            font-size: 2rem;
            color: #343434;
          }
          .subtitle{
            font-weight: bold;
            font-size: 1.2rem;
            color: #343434;
          }
          .content {
            height: 200px;
            display: grid;
            align-items: center;
            box-shadow: inset 0 0 10px rgba(0,0,0,.1);
            margin: 20px 0;
            padding: 0 10px;
            border-radius: 5px;
            overflow: scroll;
          }
          .eckButton{
            background: #2178FF;
            padding: 10px 20px;
            font-family: 'Alegreya', serif;
            color: white;
            font-weight: bold;
            font-size: 1.3rem;
            border: none;
            border-radius: 50px;
            margin-bottom: 10px;
            box-shadow: 0px 4px 4px rgba(0,0,0,.2);
          }
          .eckButton:hover{
            background: none;
            padding: 6px 16px;
            border: solid 4px #2178FF;
            color: #2178FF;
            box-shadow: none;
          }
          .quoteBG {
            position: absolute;
            background: #FFFFFF;
            box-shadow: 0px 50px 400px rgba(0,0,0,.2);
            width: calc( 100% - 40px);
            height: auto;
            text-align: center;
            border-radius: 15px 15px 30px 30px;
            border-bottom: solid 15px #2178FF;
            padding: 0 20px;
          }
          .noMargin{margin: 0 !important;}
          .hide {display: none !important;}
          .halfWhite{background: rgba(255,255,255,.5); color: #343434;font-family: 'Alegreya', serif;}
          .date {
            display: inline-block;
            margin-bottom: 10px;
          }
          .themeContainer{
            display: grid;
            background: #2178FF;
            color: white;
            width: 50%;
            height: 3em;
            margin: 0 auto;
            align-content: center;
            position: relative;
          }
          .themeRightShift{
            position: absolute;
            width: 3em;
            height: 3em;
            background: white;
            right: -1.5em;
            transform: rotate(45deg);
          }
          .themeLeftShift{
            position: absolute;
            width: 3em;
            height: 3em;
            background: white;
            left: -1.5em;
            transform: rotate(45deg);
          }
          .card {
            display: grid;
            position: relative;
            margin: 0 auto;
            max-width: 500px;
            font-family: 'Alegreya', serif;
          }
          .whiteBG {
            position: absolute;
            background: #FFFFFF;
            box-shadow: 0px 50px 400px rgba(0,0,0,.2);
            width: calc( 100% - 40px);
            height: auto;
            text-align: center;
            border-radius: 15px 15px 30px 30px;
            border-bottom: solid 15px #2178FF;
            padding: 0 20px;
          }
          @media (max-width: 430px) {
            .card{margin: 0 20px;}
            .themeContainer{width: 75%;}
            .halfWhite{margin: 0;}
            .title{font-size: 1.5rem}
          }
        `}</style>
      </div>
    );
  }
}

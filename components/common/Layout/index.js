import React from 'react';
import ReactGA from 'react-ga';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default class extends React.Component {
  componentDidMount() {
    ReactGA.initialize('UA-37580164-5', { debug: process.env.NODE_ENV !== 'production' });
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title || 'nownabe.github.io'}</title>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/static/ress.min.css" />
        </Head>
        <div className="container">
          <Header />
          {this.props.children}
          <Footer />
        </div>
        <style jsx>{`
          div.container {
            max-width: 640px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
        `}</style>
        <style global jsx>{`
          html {
            font-size: 110%;
          }

          @font-face {
            font-family: "NotoThin";
            src: url("/static/fonts/NotoSansCJKjp-Thin.otf");
          }

          body {
            font-size: 1rem;
            font-family: NotoThin, "Lato", Arial, "ヒラギノ角ゴPro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", sans-serif;
            color: #3c4a60;
          }
        `}</style>
      </div>
    );
  }
}

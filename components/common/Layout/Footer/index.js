import React from 'react';

export default () => (
  <footer>
    <p>
      Copyright &copy; 2016
      <img src="/static/images/nownabe.svg" alt="nownabe" />
      nownabe All Rights Reserved.
    </p>
    <style jsx>{`
      footer {
        margin-top: 4rem;
        text-align: center;
      }

      img {
        height: 1rem;
        width: 1rem;
        margin: 0 0.2rem;
      }

      p {
        vertical-align: middle;
      }
    `}</style>
  </footer>
);

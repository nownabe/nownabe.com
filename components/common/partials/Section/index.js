import React from 'react';

export default ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
    <style jsx>{`
      section {
        margin-top: 2rem;
      }

      h2 {
        border-bottom: 2px solid #2c5598;
        color: #2c5598;
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
    `}</style>
  </section>
);

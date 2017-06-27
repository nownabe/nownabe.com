import React from 'react';
import Link from 'next/link';

export default ({ url, link, title, description }) => (
  <section>
    <h3>
      {
          url ?
            <a href={url} className="link">{title}</a> :
            <Link href={link} className="link"><a>{title}</a></Link>
        }
    </h3>
    <p>{description}</p>
    <style jsx>{`
        h3 {
          font-size: 1.2rem;
          font-family: NotoThin;
        }

        h3 > :global(a) {
          color: #3c4a60;
          text-decoration: none;
        }

        h3 > :global(a):hover {
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
        }

        p {
          margin: 1rem 0 2rem 2rem;
        }
      `}</style>
  </section>
  );

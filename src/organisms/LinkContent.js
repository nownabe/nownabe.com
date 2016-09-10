import React from "react"

export default ({ title, url, description }) => (
  <section>
    <h3>
      <a href={url}>{title}</a>
    </h3>
    <p>{description}</p>
  </section>
)

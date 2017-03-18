import React from "react"

import Section from "common/partials/Section"
import Items from "common/partials/Items"

const contents = [
  {
    url: "http://www.slideshare.net/ShogoWatanabe/percona-meetup-jp",
    title: "Percona XtraDB Cluster",
    description:
      "Overview of Percona XtraDB Cluster at Percona Meetup Tokyo vol.1."
  },
  {
    url: "https://speakerdeck.com/nownabe/scalable-architecture-with-rabbitmq",
    title: "Scalable Architecture with RabbitMQ",
    description:
      "Explains scalable microservices with RabbitMQ."
  }
]

export default () => (
  <Section title="Materials">
    <Items contents={contents} />
  </Section>
)

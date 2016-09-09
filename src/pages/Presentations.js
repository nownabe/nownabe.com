import React from "react"
import LinkListSection from "../templates/LinkListSection"

export default () => {
  let links = [
    {
      url: "http://www.slideshare.net/ShogoWatanabe/percona-meetup-jp",
      title: "Percona XtraDB Cluster"
    },
    {
      url: "https://speakerdeck.com/nownabe/scalable-architecture-with-rabbitmq",
      title: "Scalable Architecture with RabbitMQ"
    }
  ]

  return <LinkListSection title="Presentations" links={links} />
}

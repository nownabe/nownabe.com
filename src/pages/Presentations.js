import React from "react"
import LinkContentsSection from "../organisms/LinkContentsSection"

export default () => {
  let contents = [
    {
      url: "http://www.slideshare.net/ShogoWatanabe/percona-meetup-jp",
      title: "Percona XtraDB Cluster",
      description: "hogehogehoge"
    },
    {
      url: "https://speakerdeck.com/nownabe/scalable-architecture-with-rabbitmq",
      title: "Scalable Architecture with RabbitMQ",
      description: "hogehogehoge"
    }
  ]

  return <LinkContentsSection title="Presentations" contents={contents} />
}

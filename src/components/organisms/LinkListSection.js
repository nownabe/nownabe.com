import React from "react"
import Section from "./Section"
import LinkList from "./LinkList"

export default ({ title, links }) => (
  <Section title={title} child={<LinkList list={links} />} />
)

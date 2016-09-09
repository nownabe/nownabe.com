import React from "react"
import Section from "../organisms/Section"
import LinkList from "../organisms/LinkList"

export default ({ title, links }) => (
  <Section title={title} child={<LinkList list={links} />} />
)

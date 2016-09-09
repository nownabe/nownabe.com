import React from "react"

export default ({ list }) => {
  let items = list.map((item, i) => (
    <li key={i}><a href={item.url}>{item.title}</a></li>
  ))
  return <ul>{items}</ul>
}

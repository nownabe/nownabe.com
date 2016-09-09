import React from "react"
import LinkListSection from "../templates/LinkListSection"

export default () => {
  let links = [
    {
      url: "http://memo.goodpatch.co/2016/07/beautiful-commits-with-emojis/",
      title: "Emojiで楽しく綺麗なコミットを手に入れる"
    },
    {url: "http://qiita.com/nownabe/items", title: "Qiita"},
    {url: "https://blog.nownabe.com/", title: "nownab.log"}
  ]

  return <LinkListSection title="Articles" links={links} />
}

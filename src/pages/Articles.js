import React from "react"
import LinkContentsSection from "../organisms/LinkContentsSection"

export default () => {
  let contents = [
    {
      url: "http://memo.goodpatch.co/2016/07/beautiful-commits-with-emojis/",
      title: "Emojiで楽しく綺麗なコミットを手に入れる",
      description: "hogehoge"
    },
    {
      url: "http://qiita.com/nownabe/items",
      title: "Qiita",
      description: "hogehoge"
    },
    {
      url: "https://blog.nownabe.com/",
      title: "nownab.log",
      description: "hogehoge"
    }
  ]

  return <LinkContentsSection title="Articles" contents={contents} />
}

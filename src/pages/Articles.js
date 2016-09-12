import React from "react"
import LinkContentsSection from "../organisms/LinkContentsSection"

export default () => {
  let contents = [
    {
      url: "http://memo.goodpatch.co/2016/07/beautiful-commits-with-emojis/",
      title: "Emojiで楽しく綺麗なコミットを手に入れる",
      description:
        "This article proposes using 'Emoji Prefix' to make beautiful commits for every team. \
        And it explains a useful Git technique 'commit template'."
    },
    {
      url: "http://qiita.com/nownabe/items",
      title: "Qiita",
      description:
        "Tech articles on Qiita about infra, serverside and frontend topics."
    },
    {
      url: "https://blog.nownabe.com/",
      title: "nownab.log",
      description: "Tech blog."
    }
  ]

  return <LinkContentsSection title="Articles" contents={contents} />
}

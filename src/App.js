import axios from "axios"
import React from "react"
export default function App() {

  const memeId = 181913649

  const memeCreator = async () => {

    await axios.post('https://api.imgflip.com/caption_image', {
      template_id: memeId,
      username: 'bilalkarakollu',
      password: '20558720558760.',
      text0: 'annen öyle',
      text1: 'bırak bu işleri'
    }).then(res => {
      console.log(res)
    })

  }

  return (
    <>
      <h1>Meme Generator</h1>
      <button onClick={() => memeCreator()}>Create Meme</button>
    </>
  )
}

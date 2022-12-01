import React from "react";
import memesData from "../memesData"

function Meme() {

  const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => console.log(data))
}, [])
  
  
  function getMemeImage() {
      const memesArray = allMemeImages.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      
      setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url
      }))
      
  }

  function handleChange(event){
    const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
  }
  
    return (
      <main>
        <form className="form">
                  <input 
                      type="text"
                      placeholder="Top text"
                      className="form--input"
                      onChange={handleChange}
                      value={meme.topText}
                      name="topText"
                  />
                  <input 
                      type="text"
                      placeholder="Bottom text"
                      className="form--input"
                      onChange={handleChange}
                      name="bottomText"
                      value={meme.bottomText}
                  />
                  <button
                      type = "button" 
                      className="form--button"
                      onClick={getMemeImage}
                  >
                      Get a new meme image
                  </button>
              </form>
              <div className="meme">
                <img src={meme.randomImage} alt="Meme" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
              </div>
      </main>
    )
  }

export default Meme
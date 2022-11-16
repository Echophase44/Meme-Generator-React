import React from "react";
import memesData from "../memesData"

function Meme(){

  function getMeme (){

    function randomNum(x) {
      return Math.floor(Math.random() * x) + 1;
    }

    let selection = randomNum(100)

    console.log(memesData.data.memes[selection].url)
  }
  return (
    <main>
       <form className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    type = "button" 
                    className="form--button"
                    onClick={getMeme}
                >
                    Get a new meme image
                </button>
            </form>
    </main>
  )
}

export default Meme
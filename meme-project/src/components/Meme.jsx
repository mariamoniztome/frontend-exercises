import React from "react";
import data from "../data";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [inputValues, setInputValues] = React.useState({
    topText: "",
    bottomText: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(data);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleInputChange(event, type) {
    const value = event.target.value;
    setInputValues((prevValues) => ({
      ...prevValues,
      [type]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={(e) => handleInputChange(e, "topText")}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={(e) => handleInputChange(e, "bottomText")}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      {meme.randomImage && (
        <div className="meme-container">
          <h1 className="top-text">{inputValues.topText}</h1>
           <img
            src={meme.randomImage}
            className="meme--image"
            alt="This is a random meme image"
          />
         
            
            <h1 className="bottom-text">{inputValues.bottomText}</h1>
       
         
        </div>
      )}
    </main>
  );
}

import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😐": "Neutral",
  "😂": "Laughing",
  "👻": "Ghost",
  "❤️": "Love",
  "😟": "Worried",
  "😕": "Confused",
  "👽": "Alien",
  "🤒": "Face with Thermometer",
  "🥴": "Woozy Face",
  "🥳": "Partying Face"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function eventChangeHandler(event) {
    var userInput = event.target.value;
    meaning = "";
    if (userInput in emojiDictionary) {
      meaning = emojiDictionary[userInput];
    } else {
      meaning = "Unable to recognise this emoji.";
    }
    if (userInput.trim().length === 0) {
      meaning = "";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    if (emoji in emojiDictionary) {
      meaning = emojiDictionary[emoji];
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Outtt!</h1>

      <input onChange={eventChangeHandler}></input>

      <div style={{ marginTop: "1rem" }}> {meaning} </div>

      <h3>emojis we know.</h3>

      <ul>
        {emojiList.map((emoji, index) => {
          return (
            <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

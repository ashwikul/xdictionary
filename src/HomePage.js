import React, { useState } from 'react';

const data =
  [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

  ]


function HomePage() {
  const [searchWord, setSearchWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleInput = (e) => {
    setSearchWord(e.target.value);
  }

  const onSearch = () => {
    const result = data.find(item => item.word.toLocaleLowerCase() === searchWord.toLocaleLowerCase());
    if (result) {
      setDefinition(result.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  }

  return <div style={{ marginLeft: "10px" }}>
    <h1>Dictionary App</h1>
    <div>
      <input type="text" placeholder='Search for a word...' value={searchWord} onChange={handleInput}></input>
      <button onClick={onSearch}>Search</button>
    </div>
    <h6>Definition:</h6>
    <p>{definition}</p>
  </div>
}

export default HomePage;
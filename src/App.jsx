import "./App.css";
import React, { useState, useEffect } from "react";
import Entry from "./components/Entry";
import pickColor from "./components/Colors";
import properCase from "./components/ProperCase";
import Footer from "./components/Footer";

const App = () => {
  const [pokedex, setPokedex] = useState([]);

  const fetchPokedex = async () => {
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(url);
      const data = await response.json();
      setPokedex((prevState) => [...prevState, data]);
    }
  };

  const fetchImage = (num) => {
    let zeroes = new Array(4).join("0");
    let number = (zeroes + num).slice(-3);
    return `https://www.serebii.net/pokemongo/pokemon/${number}.png`;
  };

  useEffect(() => {
    fetchPokedex();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokedex">
        {pokedex.map((i) => (
          <Entry
            key={i.game_indices[3].game_index}
            number={i.game_indices[3].game_index}
            name={properCase(i.name)}
            img={fetchImage(i.game_indices[3].game_index)}
            type={properCase(i.types[0].type.name)}
            color={pickColor(i.types[0].type.name)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import CardComponents from "./components/CardComponents";
import "./styles/carta.scss";

export default function App() {
  const [character, setCharacter] = useState([]);
  const [value, setValue] = useState("");

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharater = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setCharacter(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharater(initialUrl);
  }, []);

  const serarchingCharacter = (valor) => {
    return (character) => {
      return character.name.toLowerCase().includes(valor) || !valor;
    };
  };

  let characterMappeds = character
    .filter(serarchingCharacter(value))
    .map((personaje) => {
      return <CardComponents persona={personaje} />;
    });

  return (
    <>
      <div className="top">
        <nav>
          <div className="menu">
            <a href="/">
              <h1>Inicio</h1>
            </a>
          </div>
        </nav>
      </div>
      <div className="busqueda">
        <center>
          <input
            type="texto"
            placeholder="buscar..."
            onChange={(e) => setValue(e.target.value)}
          />
        </center>
        <div className="mapContent">{character && characterMappeds}</div>
      </div>
    </>
  );
}

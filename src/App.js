import React, { useEffect, useState, useRef } from "react";
import Card from "./Components/Card";
import "./App.css";


const API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {

  
  const [pokeInfo, setPokeInfo] = useState("");

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log(pokeInfo);
  })   

  const getPokemon = async (pokemon) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(res => res.json())
      .then(info => setPokeInfo(info))
      .catch(err => console.log(err));
  }

   const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    getPokemon(e.target.search.value);
   }
   
   
   
  return (
    <div className="app">
      <form className="form" onSubmit={onSubmit}>
        <input className="search" name="search" placeholder="Search for a pokemon"></input>
      </form>

      
    
    </div>

    
  );
}

export default App;

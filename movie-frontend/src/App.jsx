import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from "./components/MovieCard.jsx";

function App() {

  return (
   <MovieCard movie={{title: "Homem Aranha", releaseDate: "14/04/2024"}}/>
  );
}

export default App

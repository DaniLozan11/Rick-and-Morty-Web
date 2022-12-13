import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import Characters from './components/Characters';
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {

  const [characters, setCharacters] = useState([])

  const fetchApi = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
      })
  }

  useEffect(() => {
    fetchApi(API_URL)
  }, [])

  return (
    <div>
      <NavBar />
      <div className="main">
        <Characters characters={characters} />
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import Characters from './components/Characters';
import './App.css'
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {

  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState(null);

  const fetchApi = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setPagination(data.info)
      })
  }

  const handlePrev = () => {
    fetchApi(pagination.prev)
  }

  const handleNext = () => {
    fetchApi(pagination.next)
  }

  useEffect(() => {
    fetchApi(API_URL)
  }, [])

  return (
    <>
      <NavBar />
      <main className="main">
        <div className="title">
          <h1>Rick and Morty Web</h1>
        </div>
        <Pagination handleNext={handleNext} handlePrev={handlePrev} />
        <Characters characters={characters} />
      </main>
      <Footer />
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// paginas
import Home from './assets/pages/Home'
import Filmes from './assets/pages/FIlmes'
import Series from './assets/pages/Series'
import Jogos from './assets/pages/Jogos'
import Login from './assets/pages/Login'
import Canais from './assets/pages/Canais'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='Canais' element={<Canais/>}/>
          <Route path='filmes' element={<Filmes/>}/>
          <Route path='series' element={<Series/>}/>
          <Route path='jogos' element={<Jogos/>}/>
          <Route path='home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

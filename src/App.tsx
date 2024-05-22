import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// paginas
import Home from './assets/pages/Home'
import Filmes from './assets/pages/FIlmes'
import Series from './assets/pages/Series'
import Jogos from './assets/pages/Jogos'
import Login from './assets/pages/Login'
import Canais from './assets/pages/Canais'
import Reprodutor from './assets/pages/Reprodutor'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='canais' element={<Canais/>}/>
          <Route path='filmes' element={<Filmes/>}/>
          <Route path='series' element={<Series/>}/>
          <Route path='jogos' element={<Jogos/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='player' element={<Reprodutor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

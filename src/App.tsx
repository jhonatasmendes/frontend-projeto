import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// paginas
import Home from './assets/pages/Home'
import Filmes from './assets/pages/FIlmes'
import Series from './assets/pages/Series'
import Jogos from './assets/pages/Jogos'
import Login from './assets/pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='filmes' element={<Filmes/>}/>
          <Route path='series' element={<Series/>}/>
          <Route path='jogos' element={<Jogos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

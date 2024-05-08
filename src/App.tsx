import './App.css'
// componentes
import Content from './assets/components/Content'
import NavButton from './assets/components/NavButton'

function App() {
  return (
    <>
      <div className='container'>
        <div className='sidebar'>
            <NavButton>Home</NavButton>
            <NavButton>Filmes</NavButton>
            <NavButton>Series</NavButton>
            <NavButton>Jogos</NavButton>
        </div>
        <div className='content'>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default App

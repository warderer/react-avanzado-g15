import './App.css'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <h1>App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <footer><p>©Todos los derechos reservados</p></footer>
    </div>

  )
}

function Home () {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function Portafolio () {
  return (
    <div>
      <h1>Portafolio</h1>
    </div>
  )
}

function Contacto () {
  return (
    <div>
      <h1>Contacto</h1>
    </div>
  )
}

export default App

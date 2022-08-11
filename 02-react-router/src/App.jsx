import './App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portafolio'>Portafolio</Link></li>
          <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portafolio' element={<Portafolio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='*' element={<Error404 />} />
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

function Error404 () {
  const location = useLocation()
  return (
    <div>
      <h1>Error404</h1>
      <p>No encontre: {location.pathname}</p>
      <p>
        <Link to='/'>Regresar al Home</Link>
      </p>
    </div>
  )
}

export default App

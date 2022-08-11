import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
/* Importar BrowserRouter, que dota a mi App de poder manejar rutas
Debe estar en un componente superior, para que este disponible en toda
la aplicación */
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

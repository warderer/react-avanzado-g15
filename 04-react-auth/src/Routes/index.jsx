import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Dashboard from '@/pages/Dashboard'

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hola Mundo, soy el home</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default MainRoutes
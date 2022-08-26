import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import { AuthContext } from '@/context/Auth.jsx';

function MainRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path='/' element={<h1>Hola Mundo, soy el home</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/' replace />}
      />
    </Routes>
  );
}

export default MainRoutes;

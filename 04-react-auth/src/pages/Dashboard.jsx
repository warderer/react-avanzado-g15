import { getSingleUser } from '@/services/UserServices.js'
import { useContext, useRef, useState, useEffect } from 'react'
import { AuthContext } from '@/context/Auth.jsx'

function Dashboard () {
  const { user } = useContext(AuthContext) // Info Descifrada del Token del Usuario
  const effectRan = useRef(false) // Ya se ejecuto useEffect por segunda vez?
  const [userData, setUserData] = useState({}) // Guardamos la data del usuario que traemos de la API

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUserData = async () => {
        const result = await getSingleUser(user.id) // Llamo a la API y obtengo la info del usuario
        if (result.status === 200) {
          setUserData(result.data)
        }
      }

      fetchUserData()
    }

    return () => {
      effectRan.current = true
    }
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {
        user?.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>
      }

      {
        user?.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
      }

      {
        user?.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
      }

      {userData?.first_name && <p className='first_name'>First Name: {userData.first_name}</p>}
      {userData?.last_name && <p className='last_name'>Last Name: {userData.last_name}</p>}
      {userData?.gender && <p className='Gender'>Gender: {userData.gender}</p>}
      {userData?.email && <p className='Email'>Email: {userData.email}</p>}
    </div>
  )
}

export default Dashboard

import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(null) // Info del usuario descrifrado

  const loginUser = (token) => {
    window.sessionStorage.setItem('token', token)
    const decoded = jwt_decode(token) // Decodifico el JWT y lo guardo en un objeto de JS
    setUser(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    window.sessionStorage.removeItem('token')
    setIsAuth(false)
  }

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')

    if (token) {
      setIsAuth(true)
      const decoded = jwt_decode(token) // Decodifico el JWT y lo guardo en un objeto de JS
      setUser(decoded)
    }
  }, [])

  const values = {
    isAuth,
    loginUser,
    logout,
    user
  }

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  )
}

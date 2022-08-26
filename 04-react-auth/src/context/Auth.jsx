import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const loginUser = (token) => {
    window.sessionStorage.setItem('token', token);
    setIsAuth(true);
  };

  const logout = () => {
    window.sessionStorage.removeItem('token');
    setIsAuth(false);
  };

  useEffect(()=> {
    const token = window.sessionStorage.getItem('token')
    
    if(token) {
      console.log('token', token)
      setIsAuth(true);
    }
  }, [])

  const values = {
    isAuth,
    loginUser,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
}

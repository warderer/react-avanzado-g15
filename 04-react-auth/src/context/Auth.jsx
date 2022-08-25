import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider (props) {

  return (
    <AuthContext.Provider value={props}>
      {props.children}
    </AuthContext.Provider>
  );
}

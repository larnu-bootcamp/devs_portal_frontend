import React, { ReactNode } from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({});

interface AuthProvider {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: AuthProvider) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
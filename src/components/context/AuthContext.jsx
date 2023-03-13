import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onAuthStateChange } from '../../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChange(setUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user, uid: user && user.uid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

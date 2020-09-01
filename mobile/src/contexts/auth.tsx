import React from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object;
  signIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  async function signIn(email: string, password: string) {
    const response = await api.post('/session', {
      email,
      password,
    });
    console.log(response.data);
  }

  return (
    <AuthContext.Provider value={{ signed: false, user: {}, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

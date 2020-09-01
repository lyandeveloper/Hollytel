import React, { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn(email: string, password: string) {
    const response = await api.post('/session', {
      email,
      password,
    });
    setUser(response.data);
  }

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

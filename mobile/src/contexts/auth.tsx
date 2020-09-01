import React, { useState } from 'react';
import { createContext } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
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

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

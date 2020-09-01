import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    const response = await api.post('/session', {
      email,
      password,
    });
    setUser(response.data);

    api.defaults.headers.Authorization = `Baerer ${response.data.token}`;

    await AsyncStorage.setItem(
      '@RNAuth:user',
      JSON.stringify(response.data.user),
    );
    await AsyncStorage.setItem('@RNAuth:token', response.data.token);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

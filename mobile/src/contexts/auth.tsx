import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface IUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    }

    loadStorageData();
  }, [user]);

  async function signIn(email: string, password: string) {
    setLoading(true);
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  async function signOut() {
    await AsyncStorage.clear();
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

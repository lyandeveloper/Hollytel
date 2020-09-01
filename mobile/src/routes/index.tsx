import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../contexts/auth';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

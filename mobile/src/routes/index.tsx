import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AuthContext from '../contexts/auth';
import LottieView from 'lottie-react-native';

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          source={require('../assets/man-travel.json')}
          autoPlay
          loop
          resizeMode="contain"
          autoSize={true}
        />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;

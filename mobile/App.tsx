import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
import { AccountProvider } from './src/contexts/account';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App: React.FC = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer theme={MyTheme}>
        <AuthProvider>
          <AccountProvider>
            <Routes />
          </AccountProvider>
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

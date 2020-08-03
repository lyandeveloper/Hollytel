import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

// import { Container } from './styles';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;

import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Favorites from './screens/Favorites';
import Deals from './screens/Deals';
import Bookings from './screens/Bookings';
import Hotel from './screens/HotelDetails';

const Main: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f22e62ff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="md-home" color={color} size={size} />
            ) : (
              <Ionicons name="md-home-outline" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="heart" color={color} size={size} />
            ) : (
              <Ionicons name="heart-outline" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Ofertas"
        component={Deals}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="cash" color={color} size={size} />
            ) : (
              <Ionicons name="cash-outline" color={color} size={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Ionicons name="calendar" color={color} size={size} />
            ) : (
              <Ionicons name="calendar-outline" color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Hotel"
        component={Hotel}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

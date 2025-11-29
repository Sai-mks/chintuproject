import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import HotelsScreen from '../screens/HotelsScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import ExperienceScreen from '../screens/ExperienceScreen';
import {Place} from '../types';

export type RootStackParamList = {
  Home: undefined;
  PlaceDetail: {place: Place};
  Hotels: undefined;
  Restaurants: undefined;
  Experience: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="Hotels" component={HotelsScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Me from '../screens/meScreens/Me';
import Details from '../screens/homeScreens/Details';


export default function MeStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Me " component={Me} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

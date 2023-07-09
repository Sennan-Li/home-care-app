import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Services from '../screens/servicesScreens/Services';
import Cleaning from '../screens/servicesScreens/Cleaning';
import Repairs from '../screens/servicesScreens/Repairs';
import Shop from '../screens/servicesScreens/Shop';
import Item from '../screens/servicesScreens/Item';


export default function ServicesStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Services " component={Services} />
      <Stack.Screen name="Housekeeping" component={Cleaning} />
      <Stack.Screen name="Home Repairs" component={Repairs} />
      <Stack.Screen name="Online Shop" component={Shop} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  )
}

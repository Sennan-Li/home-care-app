import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/homeScreens/Home';
import Details from '../screens/homeScreens/Details';
import HealthRecords from '../screens/homeScreens/HealthRecords';
import HealthMonitoring from '../screens/homeScreens/HealthMonitoring';
import HealthData from '../screens/homeScreens/HealthData';
import HealthReport from '../screens/homeScreens/HealthReport';
import FamilyDoctor from '../screens/homeScreens/FamilyDoctor';


export default function HomeStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home " component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Health Records" component={HealthRecords} />
      <Stack.Screen name="Health Monitoring" component={HealthMonitoring} />
      <Stack.Screen name="Health Data" component={HealthData} />
      <Stack.Screen name="Health Report" component={HealthReport} />
      <Stack.Screen name="Family Doctor" component={FamilyDoctor} />
    </Stack.Navigator>
  )
}

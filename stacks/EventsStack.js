import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Events from '../screens/infoScreens/Events';
import EventSample from '../screens/infoScreens/EventSample';


export default function EventsStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Events " component={Events} />
      <Stack.Screen name="Event Sample" component={EventSample} />
    </Stack.Navigator>
  )
}

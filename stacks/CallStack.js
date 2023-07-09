import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/homeScreens/Details';
import Call from '../screens/callScreen/Call';


export default function CallStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Call " component={Call} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

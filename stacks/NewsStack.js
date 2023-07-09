import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from '../screens/infoScreens/News';
import NewsSample from '../screens/infoScreens/NewsSample';


export default function NewsStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="News " component={News} />
      <Stack.Screen name="News Sample" component={NewsSample} />
    </Stack.Navigator>
  )
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Guide from '../screens/infoScreens/Guide';
import GuideSample from '../screens/infoScreens/GuideSample';


export default function GuideStack() {
 const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Guide " component={Guide} />
      <Stack.Screen name="Guide Sample" component={GuideSample} />
    </Stack.Navigator>
  )
}

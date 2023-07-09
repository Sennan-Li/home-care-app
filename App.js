
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Info from './screens/infoScreens/Info';
import HomeStack from './stacks/HomeStack';
import ServicesStack from './stacks/ServicesStack';
import MeStack from './stacks/MeStack';
import CallStack from './stacks/CallStack';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
       <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Services':
                iconName = focused ? 'heart-circle' : 'heart-circle-outline';
                break;  
              case 'Info':
                iconName = focused ? 'information-circle' : 'information-circle-outline';
                break;
              case 'Me':
                iconName = focused ? 'person-circle' : 'person-circle-outline';
                break; 
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: route.name==='SOS'?'green':'#ff830f',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Services" component={ServicesStack} />
        <Tab.Screen name="Call" component={CallStack} options={{tabBarIcon:({ focused, color, size })=>(
          <MaterialCommunityIcons name={focused?'phone-in-talk':'phone-lock'} size={size} color={color} style={[styles.call,{backgroundColor: focused?'green':'red'}]} />
        )}}/>
        <Tab.Screen name="Info" component={Info} />
        <Tab.Screen name="Me" component={MeStack} />   
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  call: {
    position: 'absolute',
    bottom: '40%',
    padding: 10,
    color: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  }
});

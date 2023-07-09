
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import GuideStack from '../../stacks/GuideStack';
import EventsStack from '../../stacks/EventsStack';
import NewsStack from '../../stacks/NewsStack';


const Tab = createMaterialTopTabNavigator();

export default function Info() {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="Guide" component={GuideStack} />
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="News" component={NewsStack} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
});

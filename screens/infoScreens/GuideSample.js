import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,  Image, TouchableOpacity } from 'react-native';
import {infoStyles} from './styles/infoStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function GuideSample({ navigation }) {
  return (
    <ScrollView style={infoStyles.container}>
      <View style={infoStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={infoStyles.back}>
        <Ionicons style={infoStyles.headerIcon} name='chevron-back'/>
        <Text style={infoStyles.headerText} >Back</Text>
        </TouchableOpacity>
        <Ionicons style={infoStyles.headerIcon} name='bookmark-outline'/>
      </View>
      
      <Image style={infoStyles.img} source={require('../../assets/images/ee.jpg')}/>
      <Text style={infoStyles.title} >Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      <Text style={infoStyles.body} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
      <Text style={infoStyles.heading} >01 Lorem ipsum dolor sit amet</Text>
      <Text style={infoStyles.body} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
      <Text style={infoStyles.heading} >02 Lorem ipsum dolor sit amet</Text>
      <Text style={infoStyles.body} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
      <Text style={infoStyles.heading} >03 Lorem ipsum dolor sit amet</Text>
      <Text style={infoStyles.body} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>

    </ScrollView>
  );
}


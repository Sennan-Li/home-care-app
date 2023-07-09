import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HealthData({ navigation }) {
  return (
    <View style={Styles.container}>

      <Text style={Styles.title} >Health Data Sample</Text>
      <Image style={Styles.img} source={require('../../assets/images/bp-data.jpg')}/>
      <Text style={Styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      <TouchableOpacity style={Styles.button} >
      <Text style={Styles.buttonText} >Add New Data</Text>
      </TouchableOpacity>


      
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 15,
  },
  img: {
    flex: 1,
    width: '100%',
    height: "100%",
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 15,
  },
  heading: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: 500,
  },
  body: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 300,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff830f',
    borderRadius: 20,
    overflow: 'hidden'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 300,
    
  },
});

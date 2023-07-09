import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HealthReport({ navigation }) {
  return (
    <View style={Styles.container}>

      <View style={Styles.assessment}>
      <Text style={Styles.title} >Health Risk Assessment</Text>
      <Image style={Styles.img} source={require('../../assets/images/bp-data.jpg')}/>
     
      <TouchableOpacity style={Styles.button} >
      <Text style={Styles.buttonText} >Check all the data</Text>
      </TouchableOpacity>
      </View>

      <View style={Styles.risks}>
        <Text style={Styles.title} >Risk Factors</Text>

        <View style={Styles.reviews}>
          <Text style={Styles.rate} >Hyperlipidemia</Text>
          <Text style={Styles.rate} >Hyberlycemia</Text>
          <Text style={Styles.rate} >Obesity</Text>
        </View>

        <Text style={Styles.title} >Risk Results</Text>

        <View style={Styles.reviews}>
          <Text style={[Styles.rate, {backgroundColor: 'red'}]} >Impaired liver function</Text>
         
        </View>
      </View>

      <View style={Styles.advice}>
        <Text style={Styles.title} >Suggestions</Text>

        <Text style={Styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

       
      </View>



      
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    paddingBottom: 40
  },
  assessment: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    overflow: 'hidden'
  },
  risks: {
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 0,
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  advice: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  rate: {
    padding: 8,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: "#ff830f",
    color: '#fff',

  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 15,
  },
  body: {
    fontSize: 17,
    marginBottom: 15,
    fontWeight: 300,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 0.3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 300,
  },
});


import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeCard from './HomeCard';
export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
      <Image style={styles.headingImg} source={require('../../assets/images/ec.jpg')}/>
      </View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => navigation.navigate('Health Records')} style={styles.buttons} >
          <FontAwesome5 style={[styles.icons, {backgroundColor: '#f998c6'}]} name='file-medical'/>
          <Text style={styles.iconText}>Health Records</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Health Monitoring')} style={styles.buttons} >
          <FontAwesome5 style={[styles.icons, {backgroundColor: '#22a9ff'}]} name='file-medical-alt'/>
          <Text style={styles.iconText}>Health Monitoring</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Health Report')} style={styles.buttons} >
          <FontAwesome5 style={[styles.icons, {backgroundColor: 'red'}]} name='notes-medical'/>
          <Text style={styles.iconText}>Health Report</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Family Doctor')} style={styles.buttons} >
          <Fontisto style={[styles.icons, {backgroundColor: '#ff830f'}]} name='doctor'/>
          <Text style={styles.iconText}>Family Doctor</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.recommends}>
        <HomeCard navigation={navigation} img={require('../../assets/images/mk.png')} text='Medical Knowledge Sharing Session'/>

        <HomeCard navigation={navigation} img={require('../../assets/images/dc.jpg')} text='Dental Care for the Elderly'/>

        <HomeCard navigation={navigation} img={require('../../assets/images/hr.jpg')} text='Recommended recipes for the elderly with diabetes'/>

        <HomeCard navigation={navigation} img={require('../../assets/images/ge.jpg')} text='Gallery Exhibition'/>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
  heading: {
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headingImg:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 

  },
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15,
  },
  buttons: {
    alignItems: 'center',
    margin: 5,
  },
  icons: {
    color: '#fff',
    fontSize: 40,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'lightblue',
    borderRadius: 15,
    overflow: 'hidden',
  },
  iconText: {
    marginTop: 3,
    fontWeight: 500,
    paddingBottom: 10,
    fontSize: 16,
  },
  recommends: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },

});

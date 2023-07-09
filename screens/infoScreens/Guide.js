
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import GuideCard from './GuideCard';

export default function Guide({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <GuideCard navigation={navigation} img={require('../../assets/images/dc.jpg')} title='Dental Care for the Elderly' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>

      <GuideCard navigation={navigation} img={require('../../assets/images/hr.jpg')} title='Recommended recipes for the elderly with diabetes' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>

      <GuideCard navigation={navigation} img={require('../../assets/images/ee.jpg')} title='Daily Exercise for the Elderly' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>

      <GuideCard navigation={navigation} img={require('../../assets/images/gh.jpg')} title='Guidelines to the Safety of Home Appliances for the Elderly' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
  },
});

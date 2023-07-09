
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import EventCard from './EventCard';


export default function Events({navigation}) {
  return (
    <ScrollView style={styles.container}>
     <EventCard navigation={navigation} img={require('../../assets/images/me.jpg')} title='Elderly Health Examination' time='Date: 28/06/2023 08:30am' location='Location: Community centre'></EventCard>

     <EventCard navigation={navigation} img={require('../../assets/images/mk.png')} title='Medical Knowledge Sharing Session' time='Date: 06/07/2023 13:30pm' location='Location: Community centre'></EventCard>

     <EventCard navigation={navigation} img={require('../../assets/images/ge.jpg')} title='Gallery Exhibition' time='Date: 29/07/2023 9:30am' location='Location: Community centre'></EventCard>

     <EventCard navigation={navigation} img={require('../../assets/images/ha.jpg')} title='Handmade Art Activity' time='Date: 13/08/2023 10:30am' location='Location: Community centre'></EventCard>
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

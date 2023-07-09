
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import NewsCard from './NewsCard';


export default function News({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <NewsCard navigation={navigation} img={require('../../assets/images/bn.jpg')} title='Lorem ipsum dolor sit amet' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

      <NewsCard navigation={navigation} img={require('../../assets/images/bn.jpg')} title='Lorem ipsum dolor sit amet' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>

      <NewsCard navigation={navigation} img={require('../../assets/images/bn.jpg')} title='Lorem ipsum dolor sit amet' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
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

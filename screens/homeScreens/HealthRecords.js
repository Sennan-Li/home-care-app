import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HealthRecords({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <View style={styles.basics}>
        <Image style={styles.profileImg} source={require('../../assets/images/guest.jpg')}/>
        <View style={styles.profileText}>
        <Text style={styles.profileBody}>Name: </Text>
        <Text style={styles.profileBody}>Gender: </Text>
        <Text style={styles.profileBody}>Age: </Text>
       
        </View>
        </View>
        <View style={styles.contact}>
        <Text style={styles.profileBody}>Telephone:</Text>
        <Text style={styles.profileBody}>Address: </Text>
       
        </View>
       
      </View>

      <View style={styles.lists}>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
          <FontAwesome5 style={[styles.listIcon, {color: 'red'}]} name='notes-medical'/>
            <Text style={styles.listName}>Health information</Text>
          </View>
           <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <FontAwesome5 style={[styles.listIcon, {color: 'blue'}]} name='file-medical'/>
            <Text style={styles.listName}>Health history</Text>
          </View>
           <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
          <MaterialIcons style={[styles.listIcon, {color: 'green'}]} name='medical-services'/>
            <Text style={styles.listName}>Medication records</Text>
          </View>
          <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  profile: {
    flex: 1,
    backgroundColor: '#fff',
    height: 150,

    padding: 20
  },
  basics: {
    flexDirection: 'row',
  },
  profileImg:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileText:{
    flex: 1,
    height: '100%',
    marginLeft: 20,
  },
  profileBody:{
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 500,
  },
  profileAccount:{
    fontSize: 15,
    marginTop: 10,
  },
  lists: {
    marginTop: 15,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  list: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    justifyContent: 'space-between',
  },
  listText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    fontSize: 25,
    color:'grey'
  },
  listName: {
    marginLeft: 15,
    fontSize: 18, 
    fontWeight: 300
  },
});


import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Me({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.profile}>
        <Image style={styles.profileImg} source={require('../../assets/images/guest.jpg')}/>
        <View style={styles.profileText}>
        <Text style={styles.profileName}>Guest</Text>
        <Text style={styles.profileAccount}>Account Id: 888888</Text>
        </View>
      </View>

      <View style={styles.events}>
        <Text style={styles.eventsName}>My Events</Text>

       <View style={styles.eventButtons}>
       <TouchableOpacity style={styles.eventButton}>
          <MaterialIcons style={[styles.eventIcon, {color: '#000'}]} name='event'/>
          <Text style={styles.eventButtonName}>Up Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventButton}>
          <MaterialIcons style={[styles.eventIcon, {color: 'blue'}]} name='event-available'/>
          <Text style={styles.eventButtonName}>Finished</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventButton}>
          <MaterialIcons style={[styles.eventIcon, {color: 'red'}]} name='event-busy'/>
          <Text style={styles.eventButtonName}>Canceled</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventButton}>
          <MaterialIcons style={[styles.eventIcon, {color: 'green'}]} name='add-box'/>
          <Text style={styles.eventButtonName}>Create </Text>
        </TouchableOpacity>

       </View>
            
      </View>

      <View style={styles.lists}>


        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <Ionicons style={[styles.listIcon, {color: '#ff830f'}]} name='receipt-outline'/>
            <Text style={styles.listName}>My Oders</Text>
          </View>
           <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <MaterialIcons style={[styles.listIcon, {color: '#f7cd46'}]} name='collections-bookmark'/>
            <Text style={styles.listName}>My Collections</Text>
          </View>
           <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <Feather style={[styles.listIcon, {color: '#15aa98'}]} name='help-circle'/>
            <Text style={styles.listName}>Help</Text>
          </View>
          <AntDesign style={styles.listIcon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <Ionicons style={[styles.listIcon, {color: 'red'}]} name='settings-outline'/>
            <Text style={styles.listName}>Setting</Text>
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
    backgroundColor: '#fff',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  profileImg:{
    flex: 1,
    height: '100%'
  },
  profileText:{
    flex: 2,
    height: '100%',
    marginLeft: 20,
  },
  profileName:{
    marginTop: 20,
    fontSize: 18,
    fontWeight: 600,
  },
  profileAccount:{
    fontSize: 15,
    marginTop: 10,
  },
  events: {
    height: 130,
    padding:20,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  eventsName: {
    fontWeight:600,
    fontSize: 18,
  },
  eventButtons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
  },
  eventButton: {
    alignItems: 'center',
  },
  eventIcon: {
    fontSize: 40,
  },
  eventButtonName: {},
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
    fontSize: 22,
    color:'grey'
  },
  listName: {
    marginLeft: 15,
    fontSize: 18, 
    fontWeight: 300
  },
});

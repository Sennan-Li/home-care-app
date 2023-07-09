import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Services({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Housekeeping')} style={[styles.lists, {backgroundColor: 'green'}]}  >
        <Text style={styles.listText}>House Cleaning</Text>
        <MaterialIcons style={styles.listIcon} name='cleaning-services'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home Repairs')} style={[styles.lists, {backgroundColor: '#ff830f'}]}  >
        <Text style={styles.listText}>Home Repairs</Text>
        <MaterialCommunityIcons style={styles.listIcon} name='tools'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Online Shop')} style={[styles.lists, {backgroundColor: '#f998c6'}]} >
        <Text style={styles.listText}>Online Shop</Text>
        <Entypo style={styles.listIcon} name='shop'/>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.lists, {backgroundColor: '#22a9ff'}]} >
        <Text style={styles.listText}>Other Services</Text>
        <MaterialIcons style={styles.listIcon} name='more-horiz'/>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  lists: {
    width: '100%', 
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,

  },
  listText: {
    fontSize: 20,
  },
  listIcon: {
    fontSize: 60,
  },

});

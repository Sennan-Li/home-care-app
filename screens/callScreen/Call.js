import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function Call({navigation}) {
  function handleCall() {
    Alert.alert('Authorise','Are you sure to call?', [
      {text: 'Cancel'},
      {text: 'Confirm'},
      ])
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCall} style={[styles.lists, {backgroundColor: 'green'}]}  >
        <MaterialIcons style={styles.listIcon} name='quick-contacts-dialer'/>
        <Text style={styles.listText}>Emergancy Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall} style={[styles.lists, {backgroundColor: '#ff830f'}]}  >
        <MaterialCommunityIcons style={styles.listIcon} name='hand-heart'/>
        <Text style={styles.listText}>Local Community</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall} style={[styles.lists, {backgroundColor: '#f998c6'}]} >
        <FontAwesome5 style={styles.listIcon} name='hospital'/>
        <Text style={styles.listText}>Neareat Hospital</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall} style={[styles.lists, {backgroundColor: '#22a9ff'}]} >
        <MaterialCommunityIcons style={styles.listIcon} name='police-station'/>
        <Text style={styles.listText}>Police Station</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall} style={[styles.lists, {backgroundColor: 'grey'}]} >
        <MaterialIcons style={styles.listIcon} name='laptop'/>
        <Text style={styles.listText}>IT Support</Text>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lists: {
    width: '100%', 
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
  },
  listText: {
    fontSize: 25,
  },
  listIcon: {
    fontSize: 60,
  },

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function HealthMonitoring({navigation}) {
  return (
    <View style={styles.container}>

     

      <View style={styles.lists}>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
          <MaterialCommunityIcons style={styles.listIcon} name='human-male-height'/>
            <Text style={styles.listName}>Height</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
            <FontAwesome5 style={styles.listIcon} name='weight'/>
            <Text style={styles.listName}>Weight</Text>
          </View>
           
        </TouchableOpacity>

      </View>

      <View style={styles.lists}>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
          <FontAwesome5 style={styles.listIcon} name='temperature-high'/>
            <Text style={styles.listName}>Temperature</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
            <Fontisto style={styles.listIcon} name='blood-drop'/>
            <Text style={styles.listName}>Body Fat</Text>
          </View>
           
        </TouchableOpacity>

      </View>

      <View style={styles.lists}>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
          <MaterialCommunityIcons style={styles.listIcon} name='car-brake-low-pressure'/>
            <Text style={styles.listName}>Blood Pressure</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
            <Fontisto style={styles.listIcon} name='blood-test'/>
            <Text style={styles.listName}>Blood Sugar</Text>
          </View>
           
        </TouchableOpacity>

      </View>

      <View style={styles.lists}>

        <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Health Data')}>
          <View style={styles.listText}>
          <Fontisto style={styles.listIcon} name='blood'/>
            <Text style={styles.listName}>Blood Lipids</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={styles.list} >
          <View style={styles.listText}>
            <MaterialIcons style={styles.listIcon} name='more-horiz'/>
            <Text style={styles.listName}>Others</Text>
          </View>
           
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
  lists: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10
  },
  list: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 0.3,
    margin: 15,
  },
  listText: {
    flex: 1,
    alignItems: 'center',
    
    margin: 10
  },
  listIcon: {
    fontSize: 35,
    color: '#ff830f',
    padding: 15,
    
  
  },
  listName: {
    fontSize: 18, 
    fontWeight: 300
  },
});

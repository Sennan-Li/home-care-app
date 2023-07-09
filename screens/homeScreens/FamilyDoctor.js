
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function FamilyDoctor({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.lists}>

        <TouchableOpacity style={[styles.list, {backgroundColor: '#fe8db0'}]} >
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Doctors</Text>
            <Text style={styles.listName}>Choose the doctor you want to consult</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={[styles.list, {backgroundColor: '#4f96e6'}]} >
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Consultation</Text>
            <Text style={styles.listName}>Consult health questions at any time</Text>
          </View>
           
        </TouchableOpacity>

      </View>

      <View style={styles.lists}>

        <TouchableOpacity style={[styles.list, {backgroundColor: '#93df46'}]} >
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Appointments</Text>
            <Text style={styles.listName}>Book online in advance</Text>
          </View>
           
        </TouchableOpacity>

        <TouchableOpacity style={[styles.list, {backgroundColor: '#fabc59'}]} >
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Hospitals</Text>
            <Text style={styles.listName}>The cooperative hospitals are all here</Text>
          </View>
           
        </TouchableOpacity>

      </View>

      <View style={styles.lists}>
        <TouchableOpacity style={[styles.list, {backgroundColor: '#b767fc'}]} >
          <View style={styles.listText}>
            <Text style={styles.listTitle}>Inquiry record</Text>
            <Text style={styles.listName}>Appointment and visit history can be viewed here</Text>
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
    backgroundColor: '#000',
    margin: 15,
  },
  listText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  listTitle: {
    fontSize: 20, 
    fontWeight: 500,
    color: '#fff',
  },
  listName: {
    fontSize: 18, 
    fontWeight: 300,
    marginTop: 15,
    color: '#fff',
  },
});

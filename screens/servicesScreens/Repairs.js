
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Repairs() {
  return (
    <View style={styles.container}>
      <View style={styles.intro}>
      <Image style={styles.img} source={require('../../assets/images/rp.jpg')}/>
      <Text style={styles.price}>$ 200</Text>
      <Text style={styles.introText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Date</Text>
            <Text style={styles.optionBody}>Free cancellation within 3 days</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Select</Text>
            <Text style={styles.optionBody}>Choose a repair agency</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Specific</Text>
            <Text style={styles.optionBody}>Select a specific repair item</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>
    
        </View>

        <View style={styles.buttons}>
            <TouchableOpacity style={styles.reserve}><Text style={styles.buttonText}>Reserve</Text></TouchableOpacity>

            <TouchableOpacity style={styles.purchase}><Text style={styles.buttonText}>Purchase</Text></TouchableOpacity>
           
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  intro: {
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  price: {
    padding: 15,
    color: 'red',
    fontSize: 30,
  },
  introText: {
    padding: 15,
    paddingTop: 0,
    fontSize: 20,
    fontWeight: 300
  },
  options: {
    marginTop: 15,
    backgroundColor: '#fff',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  optionText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 20,
    marginRight: 15,
    fontWeight: 400,
  },
  optionBody: {
    fontSize: 17,
    color: 'grey'
  },
  icon: {
    fontSize: 18,
    color: 'grey'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'

  },
  reserve: {
    backgroundColor: 'green',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 10,
  },
  purchase: {
    backgroundColor: 'red',
    padding: 15,
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
  },
  buttonText: {
    color: '#fff',
  }

});

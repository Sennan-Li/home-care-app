
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function Item() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
      <Image style={styles.img} source={require('../../assets/images/broccoli.jpg')}/>
      <Text style={styles.price}>$ 1.00</Text>
      <Text style={styles.introText}>Lorem ipsum dolor sit amet</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Return</Text>
            <Text style={styles.optionBody}>Free refund if not happy</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Coupon</Text>
            <Text style={styles.optionBody}>Click to enter coupon</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Delivery</Text>
            <Text style={styles.optionBody}>Choose a delivery method</Text>
          </View>
          <AntDesign style={styles.icon} name='right'/>
        </TouchableOpacity>
    
        </View>

        <View style={styles.footage}>
          <TouchableOpacity style={styles.reviews}>

              <Text style={styles.reviewsTitle}>Reviews</Text>
              <View style={styles.rates} >
                <Text style={styles.rate}>Good 95.33%</Text>
                <AntDesign style={styles.icon} name='right'/>
              </View>
      
          </TouchableOpacity>


          <View style={styles.pins}>
            <Text style={styles.pin}>Nice quality</Text>
            <Text style={styles.pin}>Nice quality</Text>
            <Text style={styles.pin}>Nice quality</Text>
            <Text style={styles.pin}>Nice quality</Text>
          </View>




        <View style={styles.buttons}> 
          <TouchableOpacity style={styles.cart}><Text style={styles.buttonText}>Add to Cart</Text></TouchableOpacity>
          <TouchableOpacity style={styles.purchase}><Text style={[styles.buttonText, {color: '#fff'}]}>Buy Now</Text></TouchableOpacity> 
        </View>

        </View>
        

      </ScrollView>
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
    color: '#fff',
    backgroundColor: '#ff830f',
    fontSize: 30,
  },
  introText: {
    padding: 15,
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
  footage: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#fff',
    padding: 15,
    paddingBottom: 30,
    justifyContent: 'space-between'
  },
  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewsTitle: {
    fontSize: 18
  },
  rates: {
    flexDirection: 'row',
  },
  rate: {
    fontSize: 15
  },

  pins: {
    flexDirection: 'row',

  },
  pin: {
    fontSize: 12,
    padding: 8,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 8,
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'

  },
  cart: {
    backgroundColor: '#f7ce45',
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
    fontWeight: 600,
  }

});


import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ShopCard from './ShopCard';
export default function Shop({navigation}) {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.main}>
        <TouchableOpacity style={styles.buttons} >
          <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#f998c6'}]} name='leaf'/>
          <Text style={styles.iconText}>Vegetable</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
         <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#f998c6'}]} name='fish'/>
          <Text style={styles.iconText}>Fruit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
         <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#f998c6'}]} name='food-apple'/>
          <Text style={styles.iconText}>Meat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
          <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#ff830f'}]} name='soy-sauce'/>
          <Text style={styles.iconText}>Condiment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
          <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#b89ef6'}]} name='tshirt-crew'/>
          <Text style={styles.iconText}>Clothing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
          <MaterialCommunityIcons style={[styles.icons, {backgroundColor: '#15aa98'}]} name='storefront'/>
          <Text style={styles.iconText}>Groceries</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.sales}>
        <Text style={styles.salesTitle}>Sales</Text>
        
        <TouchableOpacity style={styles.salesItem}>
          <Image style={styles.salesImg} source={require('../../assets/images/coriander.jpg')}/>
          <Text style={styles.itemText}>$1.10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.salesItem}>
          <Image style={styles.salesImg} source={require('../../assets/images/milk.jpg')}/>
          <Text style={styles.itemText}>$0.90</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.salesItem}>
          <Image style={styles.salesImg} source={require('../../assets/images/cloth.jpg')}/>
          <Text style={styles.itemText}>$1.50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.salesItem}>
          <Image style={styles.salesImg} source={require('../../assets/images/egg.jpg')}/>
          <Text style={styles.itemText}>$0.50</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.recommends}>
        <ShopCard navigation={navigation} img={require('../../assets/images/broccoli.jpg')} text='Broccoli' price='$1.00' />

        <ShopCard navigation={navigation} img={require('../../assets/images/beef.jpg')} text='Milk' price='$1.20'/>

        <ShopCard navigation={navigation} img={require('../../assets/images/apple.jpg')} text='Product Name' price='$2.00' />

        <ShopCard navigation={navigation} img={require('../../assets/images/leek.jpg')} text='Product Name' price='$2.00'/>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
  },
  main: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15
  },
  buttons: {
    alignItems: 'center',
    margin: 5,
  },
  icons: {
    color: '#fff',
    fontSize: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  iconText: {
    paddingTop: 5,
    fontWeight: 600,
    fontSize: 17,
  },

  sales: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  salesTitle: {
    fontSize: 25,
    color: 'red',
    fontWeight: 300,
  },
  salesItem: {
    marginLeft: 10,
  },
  salesImg: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  itemText: {
    color: 'red',
    backgroundColor: 'yellow',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
    padding: 2,

  },


  recommends: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 15,
  },

});

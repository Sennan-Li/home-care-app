import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function HomeCard({img, text, navigation}) {
  return (
        <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.recommendCard}>
          <Image style={styles.recommendImg} source={img}/>
          <Text style={styles.recommendText}>{text}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  recommendCard: {
    margin: 5,
    marginBottom: 15,
    width: '45%',
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  recommendImg:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  
  },
  recommendText:{
    color: '#000',
    fontWeight: 300,
    padding: 10,
  },
});
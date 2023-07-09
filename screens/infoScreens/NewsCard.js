
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function NewsCard({img, title, body, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('News Sample')} style={styles.card}>
          <Image style={styles.cardImg} source={img}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardBody}>{body}</Text>
          </View>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    card:{
      height: 300,
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 15,
  
    },
    cardImg:{
      flex: 2,
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    cardText:{
      flex: 1,
      marginTop: 15,
    },
    cardTitle:{
      fontWeight: 600,
    },
    cardBody:{
      fontWeight: 300,
      marginTop: 10,
    },
  });
  
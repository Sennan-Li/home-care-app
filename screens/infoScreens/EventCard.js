
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function EventCard({img, title, time, location, body, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Event Sample')} style={styles.card}>
          <Image style={styles.cardImg} source={img}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardBody}>{time}</Text>
            <Text style={styles.cardBody}>{location}</Text>
           <Text style={styles.cardBody}>{body}</Text>
          </View>
        </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    card:{
      height: 150,
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 15,
  
    },
    cardImg:{
      width: '40%',
      height: '100%',
      borderRadius: 10,
    },
    cardText:{
      flex: 1,
      marginLeft: 15,
    },
    cardTitle:{
      fontWeight: 600,
      marginBottom: 10,
    },
    cardBody:{
      fontWeight: 300,
      marginTop: 5,
    },
  });
  
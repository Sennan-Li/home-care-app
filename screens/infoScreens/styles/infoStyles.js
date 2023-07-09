import { StyleSheet} from 'react-native';

export const infoStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop: 0
    },
    title: {
      fontSize: 30,
      fontWeight: 600,
      marginBottom: 15,
    },
    img: {
      width: '100%',
      height: 300,
      resizeMode: 'cover',
      borderRadius: 5,
      marginBottom: 15,
    },
    heading: {
      fontSize: 25,
      marginBottom: 15,
      fontWeight: 500,
    },
    body: {
      fontSize: 20,
      marginBottom: 15,
      fontWeight: 300,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
      paddingBottom: 10,
    },
    back: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    headerIcon: {
      fontSize: 25,
      color: '#ff830f'
    },
    headerText: {
      fontSize: 18,
      color: '#ff830f'
    },
  });
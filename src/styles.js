import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
     backgroundColor: '#FFD700',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default globalStyles;
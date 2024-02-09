import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  resultContainer: {
    padding: 10,
    alignItems: 'flex-end',
  },
  resultText: {
    color: 'white',
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212121',
    height: 80,
    width: '24%',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F47521',
    height: 80,
    width: '100%',
  },
  clearButtonText: {
    color: 'black',
    fontSize: 24,
  },
});

export default styles;

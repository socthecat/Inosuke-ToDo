import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9e4e6',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  margin: {
    marginHorizontal: 10,
    marginVertical: 20
  },
  buttonView: {
    marginVertical: 5
  },
  center: {
    alignItems: 'center'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 40,
    color: '#783880',
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
    shadowColor: '#d0a4a9',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 10
  },
  title: {
    color: '#92677d',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    paddingVertical: 5,
    paddingHorizontal: 0,
    fontSize: 18,
    lineHeight: 22
  }
})

export default styles

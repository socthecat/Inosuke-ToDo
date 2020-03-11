import React from 'react'
import { Provider } from 'react-redux'
import { ScrollView } from 'react-native'
import ToDos from './components/ToDos/index'
import store from './state/store'
import styles from './components/style'
export default function App () {
  return (
    <Provider store={store}>
      <ScrollView style={styles.container} contentContainerStyle={styles.center}>
        <ToDos title='Inosuke ToDo:' />
      </ScrollView>
    </Provider>
  )
}

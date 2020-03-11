import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from '../style'

const ToDo = (props) => {
  const [title, setTitle] = useState(props.title)
  const [text, setText] = useState(props.text)

  const [isEdit, setEdit] = useState(false)

  function edit () {
    setEdit(true)
  }

  function submit () {
    props.editItem({ id: props.id, title: title, text: text })
    setEdit(false)
  }

  function deleteItem () {
    props.deleteItem({ id: props.id, title: title, text: text })
  }

  return (
    <View style={styles.card}>
      {isEdit &&
        <>
          <View>
            <TextInput style={styles.title} onChangeText={title => setTitle(title)} defaultValue={title} />
            <TextInput style={styles.text} onChangeText={text => setText(text)} defaultValue={text} />
          </View>
          <View style={styles.buttonView}><Button color='#ffc7ff' onPress={() => submit()} title='Change' /></View>
        </>}
      {!isEdit && <><Text style={styles.title}>{title}</Text><Text style={styles.text}>{text}</Text><View style={styles.buttonView}><Button color='#ffc7ff' onPress={() => edit()} title='Edit' /></View></>}
      <View style={styles.buttonView}><Button color='#d49bd4' onPress={() => deleteItem()} title='X' /></View>
    </View>
  )
}

export default ToDo

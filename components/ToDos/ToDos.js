import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import styles from '../style'

import ToDo from '../ToDo/index'

const ToDos = (props) => {
  const [title, setTitle] = useState(undefined)
  const [text, setText] = useState(undefined)
  // state
  const [cards, setCards] = useState(props.cardState)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    console.log('props: ', props)
    setCards(props.cardState)
  }, [props])

  function addItemForm () {
    return (
      <View style={styles.card}>
        <TextInput onChangeText={title => setTitle(title)} style={styles.title} placeholder='Title' />
        <TextInput onChangeText={text => setText(text)} style={styles.text} placeholder='Text' />
        <Button color='#d49bd4' onPress={() => addItem()} title='Add' />
      </View>
    )
  }

  function addItem () {
    if (title && text) {
      props.addItem({
        title: title,
        text: text,
        id: Date.now()
      })
    }
    setShowForm(false)
  }

  return (
    <View style={styles.margin}>
      <Text style={styles.mainTitle}>{props.title}</Text>
      <View>
        {cards.map((card) => {
          return (
            <ToDo
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
            />
          )
        })}
      </View>
      {!showForm && <Button color='#d49bd4' onPress={() => setShowForm(true)} title='+' />}
      {showForm && addItemForm()}
    </View>
  )
}

export default ToDos

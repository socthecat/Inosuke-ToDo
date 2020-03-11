import update from 'immutability-helper'

import { todos } from '../constants'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case todos.FETCH_ITEMS_SUCCESS:
      const arr = []
      for (let i = 0; i < action.payload.length; i++) {
        arr.push(
          {
            title: action.payload[i].name,
            text: action.payload[i].model + ', ' + action.payload[i].manufacturer,
            id: i
          }
        )
      }
      return update(state, { $push: arr })
    case todos.FETCH_ITEMS_ERROR:
      console.log('Failed to fetch items :(')
      return state
    case todos.ADD_ITEM:
      return update(state, {
        $push: [{
          title: action.payload.title,
          text: action.payload.text,
          id: action.payload.id
        }]
      })
    case todos.EDIT_ITEM:
      console.log('EDit Item')
      const getIndex = state.findIndex((card) => card.id === action.payload.id)
      return update(state, {
        [getIndex]: {
          $set: {
            title: action.payload.title,
            text: action.payload.text,
            id: action.payload.id
          }
        }
      })
    case todos.DELETE_ITEM:
      const getIndex2 = state.findIndex((card) => card.id === action.payload.id)
      console.log('index', getIndex2)
      return update(state, { $splice: [[getIndex2, 1]] })
    default:
      return state
  }
}

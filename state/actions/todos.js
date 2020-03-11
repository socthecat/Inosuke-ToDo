import { todos } from '../constants'

const fetchItems = () => {
  return { type: todos.FETCH_ITEMS }
}
const addItem = (payload) => {
  return {
    type: todos.ADD_ITEM,
    payload
  }
}
const deleteItem = (payload) => {
  return {
    type: todos.DELETE_ITEM,
    payload
  }
}
const editItem = (payload) => {
  return {
    type: todos.EDIT_ITEM,
    payload
  }
}
export default {
  addItem,
  editItem,
  deleteItem,
  fetchItems
}

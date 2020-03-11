import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ToDo from './ToDo'
import { todos } from '../../state/actions'

const mapDispatchToProps = (dispatch) => {
  const { editItem, deleteItem } = todos
  return bindActionCreators({ editItem, deleteItem }, dispatch)
}
const ToDoContainer = connect(
  null,
  mapDispatchToProps
)(ToDo)

export default ToDoContainer

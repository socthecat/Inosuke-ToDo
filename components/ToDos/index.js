import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ToDos from './ToDos'
import { todos } from '../../state/actions'

const mapStateToProps = (state) => {
  console.log('state: ', state)
  return {
    cardState: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch)
  const { fetchItems, addItem } = todos
  return bindActionCreators({ fetchItems, addItem }, dispatch)
}
const ToDosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDos)

export default ToDosContainer

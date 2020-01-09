import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  todos,
  visibilityFilter
})

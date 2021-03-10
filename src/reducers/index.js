import { combineReducers } from 'redux'
import goalsReducer from './goalsReducer'
// import goalsReducer from './goalsReducer'
// import notesReducer from './notesReducer'


export default combineReducers({
    goals: goalsReducer
})
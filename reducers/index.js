import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import goalsReducer from './goalsReducer'
import notesReducer from './notesReducer'
//import all reducers here

export default combineReducers({
    users: usersReducer,
    goals: goalsReducer,
    notes: notesReducer

})
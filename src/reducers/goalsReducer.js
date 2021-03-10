

const initialState = []

const goalsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_GOALS_SUCCESS':
      return action.users
    default: 
      return state
  }
}

export default goalsReducer



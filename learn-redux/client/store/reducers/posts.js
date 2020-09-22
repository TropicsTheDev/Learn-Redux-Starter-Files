// reducer takes in 2 things:
// 1. The action
// 2. copy of state

function posts(state = [], action) {
  switch(action.type){
    case 'INCREMENT_LIKES' : 
    // return updated state
    const i = action.index;
    return [
      ...state.slice(0, i), // everything before the item
      {...state[i], likes: state[i].likes + 1}, // the item
      ...state.slice(i + 1) //everything after
    ]
    default: 
    return state
  }
}

export default posts;
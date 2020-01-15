import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import projectsReducer from './reducers/projectsReducer'
import jokeReducer from './reducers/jokeReducer'

const reducer = combineReducers({
  projects: projectsReducer,
  joke: jokeReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
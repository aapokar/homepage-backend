import { createStore, combineReducers} from 'redux'

import projectsReducer from './reducers/projectsReducer'

const reducer = combineReducers({
  projects: projectsReducer,
})

const store = createStore(reducer)

export default store
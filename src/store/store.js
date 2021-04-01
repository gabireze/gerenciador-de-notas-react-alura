import { createStore, combineReducers } from 'redux';
import notesReducer from './Notes/Notes.reducer'

const rootReducer = combineReducers({
  notes: notesReducer,
})

const store = createStore(rootReducer);

export default store;
import { createStore, combineReducers } from 'redux';
import saveNoteReducer from './SaveNote/SaveNote.reducer'

const rootReducer = combineReducers({
  saveNote: saveNoteReducer,
})

const store = createStore(rootReducer);

export default store;
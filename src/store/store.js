import { createStore, combineReducers } from 'redux';
import salvarNotaReducer from './SalvarNota/SalvarNota.reducer'

const rootReducer = combineReducers({
  salvarNota: salvarNotaReducer,
})

const store = createStore(rootReducer);

export default store;
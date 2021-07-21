import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducer';
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

export const persistor = persistStore(store);

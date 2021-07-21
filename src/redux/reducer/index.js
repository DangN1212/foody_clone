import { combineReducers } from 'redux';
import Order from '../reducer/Order';
import Counter from './Counter';
import Auth from './Auth';
export default reducer = combineReducers({
    order: Order,
    auth: Auth
});

import { combineReducers } from 'redux';
import Order from '../reducer/Order';
import Auth from './Auth';
import Categories from './Categories';
export default reducer = combineReducers({
    order: Order,
    auth: Auth,
    categories: Categories
});

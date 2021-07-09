import { combineReducers } from 'redux';
import Order from '../reducer/Order';
import Counter from './Counter';
export default reducer = combineReducers({
    order: Order,
    counter: Counter
});

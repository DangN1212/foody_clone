import { createStoreHook } from 'react-redux';
import { ORDER } from '../constant';

const defaultOrder = [];

export default function orderReducer(state = defaultOrder, action) {
    switch (action.type) {
        case ORDER.update:
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { ORDER } from '../constant';

const defaultOrder = {
    value: 0
};

function counterReducer(state = defaultOrder, action) {
    switch (action.type) {
        case ORDER.increase:
            return { ...state, value: state.value + 1 };
        case ORDER.decrease:
            return { ...state, value: state.value > 0 ? state.value - 1 : 0 };
        default:
            return state;
    }
}

const persistConfig = {
    key: 'counter',
    storage: AsyncStorage
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

export default persistedCounterReducer;

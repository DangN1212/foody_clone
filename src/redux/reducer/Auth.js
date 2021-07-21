import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import { AUTH } from '../constant';

const defaultAuth = {
    token: '',
    email: '',
    firstName: '',
    lastName: ''
};

function authReducer(state = defaultAuth, action) {
    switch (action.type) {
        case AUTH.sign_up:
            return { ...state };
            break;
        case AUTH.sign_in:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email
            };
        default:
            return state;
    }
}

const persistConfig = {
    key: 'auth',
    storage: AsyncStorage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export default persistedAuthReducer;

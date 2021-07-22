import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { AUTH } from '../constant';

const defaultAuth = {
    token: '',
    email: '',
    firstName: '',
    lastName: ''
};

function authReducer(state = defaultAuth, action) {
    switch (action.type) {
        case AUTH.sign_in:
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email
            };
        case AUTH.sign_out:
            return defaultAuth;
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

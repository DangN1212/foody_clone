import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { AUTH, CATEGORIES } from '../constant';

const defaultCategories = {
    list: []
};

function categoriesReducer(state = defaultCategories, action) {
    console.log('===categoriesReducer', action.type);
    switch (action.type) {
        case CATEGORIES.get:
            console.log('[categoriesReducer]', action.payload);
            return { ...state, list: action.payload };
        case AUTH.sign_out:
            return defaultCategories;
        default:
            return state;
    }
}

const persistConfig = {
    key: 'categories',
    storage: AsyncStorage
};

const persistedCategoriesReducer = persistReducer(
    persistConfig,
    categoriesReducer
);

export default persistedCategoriesReducer;

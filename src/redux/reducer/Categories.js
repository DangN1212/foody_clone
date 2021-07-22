import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { AUTH, CATEGORIES } from '../constant';

const defaultCategories = {
    list: []
};

function categoriesReducer(state = defaultCategories, action) {
    switch (action.type) {
        case CATEGORIES.get:
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

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../ultilities/constant';
import { AuthenticationTab } from '../../navigations/tabs';
import Login from '../login';
import { setToken } from '../../network/request';

export default function InitScreen() {
    const token = useSelector(state => state.auth.token);
    // console.log('[init screen]', token);
    // console.log(token.auth.token);
    if (token) {
        setToken(token);

        return <AuthenticationTab />;
    } else {
        return <Login />;
    }
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../ultilities/constant';
import Login from '../screens/login';
import SignUp from '../screens/signup';

const { Navigator, Screen } = createStackNavigator();
export default function StackNavigation() {
    return (
        <Navigator headerMode="none">
            <Screen name={ROUTES.LOGIN} component={Login} />
            <Screen name={ROUTES.SIGNUP} component={SignUp} />
        </Navigator>
    );
}

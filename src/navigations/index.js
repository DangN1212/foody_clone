import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../ultilities/constant';
import Login from '../screens/login';

const { Navigator, Screen } = createStackNavigator();
export default function StackNavigation() {
    return (
        <Navigator headerMode="none">
            <Screen name={ROUTES.LOGIN} component={Login} />
        </Navigator>
    );
}

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../ultilities/constant';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';
import { AuthenticationTab } from '../tabs';
import Restaurant from '../../screens/restaurant';

const { Navigator, Screen } = createStackNavigator();
export default function StackNavigation() {
    return (
        <Navigator headerMode="none">
            <Screen name={ROUTES.TAB} component={AuthenticationTab} />
            <Screen name={ROUTES.LOGIN} component={Login} />
            <Screen name={ROUTES.SIGNUP} component={SignUp} />
            <Screen name={ROUTES.RESTAURANT} component={Restaurant} />
        </Navigator>
    );
}

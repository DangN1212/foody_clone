import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Orders from '../../screens/orders';
import Profile from '../../screens/profiles';
import Saved from '../../screens/saved';
import { ROUTES } from '../../ultilities/constant';
import TabCustom from '../../components/TabCustom';

const Tab = createBottomTabNavigator();

export const AuthenticationTab = () => {
    return (
        <Tab.Navigator tabBar={props => <TabCustom {...props} />}>
            <Tab.Screen name={ROUTES.HOME} component={Home} />
            <Tab.Screen name={ROUTES.ORDERS} component={Orders} />
            <Tab.Screen name={ROUTES.SAVED} component={Saved} />
            <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
        </Tab.Navigator>
    );
};

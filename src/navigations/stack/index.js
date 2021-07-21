import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../ultilities/constant';
import Login from '../../screens/login';
import SignUp from '../../screens/signup';
import { AuthenticationTab } from '../tabs';
import Restaurant from '../../screens/restaurant';
import RestaurantInfo from '../../screens/restaurant/Info';
import CheckoutOrder from '../../screens/checkoutOrder';
import PromoCodeList from '../../screens/promoCodeList';
import InitScreen from '../../screens/InitScreen';

const { Navigator, Screen } = createStackNavigator();
export default function StackNavigation() {
    return (
        <Navigator headerMode="none">
            <Screen name={ROUTES.INIT_SCREEN} component={InitScreen} />
            <Screen name={ROUTES.LOGIN} component={Login} />
            <Screen name={ROUTES.SIGNUP} component={SignUp} />
            <Screen name={ROUTES.TAB} component={AuthenticationTab} />
            <Screen name={ROUTES.RESTAURANT} component={Restaurant} />
            <Screen name={ROUTES.RESTAURANT_INFO} component={RestaurantInfo} />
            <Screen name={ROUTES.CHECKOUT_ORDER} component={CheckoutOrder} />
            <Screen name={ROUTES.PROMO_CODE_APPLY} component={PromoCodeList} />
        </Navigator>
    );
}

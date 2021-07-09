/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import StackNavigation from './src/navigations/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <StackNavigation />
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};
export default App;

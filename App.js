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
const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <StackNavigation />
            </SafeAreaProvider>
        </NavigationContainer>
    );
};
export default App;

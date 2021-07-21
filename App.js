/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import StackNavigation from './src/navigations/stack';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Loading</Text>} persistor={persistor}>
                <NavigationContainer>
                    <SafeAreaProvider>
                        <StackNavigation />
                    </SafeAreaProvider>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};
export default App;

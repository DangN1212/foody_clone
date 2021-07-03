import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SafeViewAreaTop() {
    const insets = useSafeAreaInsets();

    return <View style={{ paddingTop: insets.top }}></View>;
}

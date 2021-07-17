import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { buttonStyles } from '../../../components/styles/button';
import { COLORS } from '../../../ultilities/constant';
import {
    DEVICE_WIDTH,
    getCommonPaddingHorizontal,
    getSizeFromHeight
} from '../../../ultilities/responsive';

export default function PlaceOrder() {
    const inset = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.price}>$ 16.00</Text>
            </View>
            <TouchableOpacity
                style={[buttonStyles.buttonSignIn, buttonStyles.buttonCommon]}>
                <Text style={styles.buttonText}>placeholder</Text>
            </TouchableOpacity>
            <View paddingBottom={inset.bottom}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: -6
        },
        backgroundColor: 'white',
        paddingTop: getSizeFromHeight(16),
        paddingHorizontal: getCommonPaddingHorizontal()
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    price: {
        color: COLORS.ORANGE,
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
});

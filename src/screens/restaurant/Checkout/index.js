import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS, ROUTES } from '../../../ultilities/constant';
import {
    DEVICE_WIDTH,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

import { useNavigation } from '@react-navigation/native';

export default function Checkout({ value = 0 }) {
    const navigation = useNavigation();

    const handleGoToPlaceOrder = () => {
        navigation.navigate(ROUTES.CHECKOUT_ORDER);
    };

    return (
        <TouchableOpacity
            style={styles.checkout}
            onPress={handleGoToPlaceOrder}>
            <View style={styles.flexRow}>
                <View style={styles.imageCheckout}>
                    <Image source={images.Checkout} />
                </View>
                <View>
                    <Text style={styles.textInfo}>
                        Checkout - {value} items
                    </Text>
                    <Text>Pizzon - Crib ln</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkout: {
        backgroundColor: '#ffffff',
        width: getSizeFromWidth(311),
        position: 'absolute',
        left: getSizeFromWidth(32),
        bottom: getSizeFromHeight(27),
        paddingHorizontal: getSizeFromWidth(10),
        paddingVertical: getSizeFromHeight(8),
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2
        }
        // boxShadow: 0px 2px 32px 0px #0000001F;
    },
    imageCheckout: {
        width: getSizeFromWidth(30),
        height: getSizeFromHeight(30),
        marginRight: getSizeFromWidth(10)
    },
    textInfo: {
        color: COLORS.GREY_DARKER01,
        fontSize: 12,
        marginBottom: 5
    }
});

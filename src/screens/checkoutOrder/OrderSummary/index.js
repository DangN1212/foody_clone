import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function OrderSummary({ stylesCommon }) {
    return (
        <View style={stylesCommon.container}>
            <View
                style={[
                    stylesCommon.flexRow,
                    { marginBottom: getSizeFromHeight(24) }
                ]}>
                <Text style={stylesCommon.title02}>Order summary</Text>
                <Text style={stylesCommon.textRight}>Add more</Text>
            </View>
            <View style={[stylesCommon.flexRow01, { alignItems: 'baseline' }]}>
                <Text style={{ color: COLORS.GREY_DARKER01 }}>x1</Text>
                <View style={styles.foodDetail}>
                    <Text style={styles.foodName}>Shrimp Pizza</Text>
                    <Text style={styles.foodOption}>+Potato, +Ketchup</Text>
                </View>
                <Text style={styles.price}>$ 15.00</Text>
            </View>
            <View
                style={[
                    stylesCommon.flexRow,
                    { marginBottom: getSizeFromHeight(8) }
                ]}>
                <Text style={styles.subTotal}>Subtotal</Text>
                <Text style={styles.priceTotal}>$ 15.00</Text>
            </View>
            <View style={stylesCommon.flexRow}>
                <Text style={styles.shipping}>Shipping fee</Text>
                <Text style={styles.shipping}>$ 11.00</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    foodDetail: {
        marginLeft: getSizeFromWidth(14)
    },
    foodName: {
        fontSize: 15,
        color: COLORS.GREY_DARKER01,
        marginBottom: getSizeFromHeight(5)
    },
    foodOption: {
        color: COLORS.GREY02,
        fontSize: 12
    },
    price: {
        color: COLORS.GREY04,
        fontSize: 15,
        marginRight: 0,
        marginLeft: 'auto'
    },
    subTotal: {
        fontSize: 16,
        color: COLORS.GREY_DARKER01,
        fontWeight: 'bold'
    },
    shipping: {
        fontSize: 15,
        color: COLORS.GREY_DARKER01
    }
});

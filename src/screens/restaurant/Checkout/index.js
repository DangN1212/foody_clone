import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function Checkout() {
    return (
        <View style={styles.checkout}>
            <View style={styles.flexRow}>
                <View style={styles.imageCheckout}>
                    <Image source={images.Checkout} />
                </View>
                <View>
                    <Text style={styles.textInfo}>Checkout - 1 items</Text>
                    <Text>Pizzon - Crib ln</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkout: {
        backgroundColor: '#efefef',
        width: getSizeFromWidth(311),
        position: 'absolute',
        left: getSizeFromWidth(32),
        bottom: getSizeFromHeight(27),
        paddingHorizontal: getSizeFromWidth(10),
        paddingVertical: getSizeFromHeight(8),
        borderRadius: 5
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

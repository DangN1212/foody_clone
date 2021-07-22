import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function ItemCategories({ data }) {
    return (
        <View style={styles.item}>
            <View style={styles.squareBox}>
                <Image source={data.image} />
            </View>
            <Text style={styles.text}>{data.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginLeft: getSizeFromWidth(24),
        textAlign: 'center'
    },
    squareBox: {
        width: getSizeFromWidth(56),
        height: getSizeFromWidth(56),
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: COLORS.GREY_LIGHTER,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: getSizeFromHeight(16)
    },
    text: {
        textAlign: 'center'
    }
});

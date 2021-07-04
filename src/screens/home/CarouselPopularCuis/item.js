import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function Item({ data, index, height }) {
    return (
        <View style={styles.item}>
            <View style={styles.wrapImage}>
                <Image source={data.image} style={styles.wrapImage} />
            </View>
            <Text style={styles.wrapText}>{data.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginLeft: getSizeFromWidth(24)
    },
    wrapImage: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden'
    },
    wrapText: {
        padding: getSizeFromWidth(8),
        textAlign: 'center',
        color: COLORS.GREY_DARKER01
    }
});

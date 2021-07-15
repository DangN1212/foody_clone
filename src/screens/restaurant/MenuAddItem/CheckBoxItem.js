import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function CheckBoxItem({
    title = 'Size',
    list = ['M', 'L', 'XL'],
    price = 12.0
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.wrapper}>
                <View>
                    {list.map((item, index) => {
                        return (
                            <View style={styles.row}>
                                <TouchableOpacity
                                    onPress={() => setActiveIndex(index)}>
                                    <Image
                                        source={
                                            index === activeIndex
                                                ? images.checkboxActive
                                                : images.checkbox
                                        }
                                        style={styles.images}
                                    />
                                </TouchableOpacity>
                                <Text
                                    style={
                                        index === activeIndex
                                            ? styles.textActive
                                            : styles.text
                                    }>
                                    {item}
                                </Text>
                            </View>
                        );
                    })}
                </View>
                <Text>${price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: getSizeFromHeight(10),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GREY_LIGHTER01,
        marginBottom: getSizeFromHeight(15)
    },
    title: {
        fontWeight: 'bold',
        color: '#4F585E',
        fontSize: 16,
        lineHeight: 16,
        marginBottom: getSizeFromHeight(18)
    },
    textActive: {
        color: COLORS.GREY_DARKER01
    },
    text: {
        color: COLORS.GREY02
    },
    images: {
        width: getSizeFromWidth(12),
        height: getSizeFromWidth(12),
        marginRight: getSizeFromWidth(14)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getSizeFromHeight(10)
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

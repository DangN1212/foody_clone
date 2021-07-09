import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images';
import { textStyles } from '../../../components/styles/text';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function MenuItem({ data, isLast = false, onPressMenu }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={onPressMenu}>
                <View
                    style={
                        isLast
                            ? styles.itemWithoutBorderBottom
                            : styles.borderBottom
                    }>
                    <Image source={images.ResItem} style={styles.image} />
                    <View>
                        <View style={styles.itemRowTitle}>
                            <Text style={styles.itemTitle}>{data.title}</Text>
                            <Text>KCal: {data.kcal}</Text>
                        </View>
                        <View style={styles.itemText}>
                            <Text style={{ ...textStyles.colorGray }}>
                                {data.detail}
                            </Text>
                        </View>
                        <View style={styles.itemRow}>
                            <Text style={styles.textOrange}>${data.price}</Text>
                            <Text style={styles.textStrike}>
                                ${data.oldPrice}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: getSizeFromWidth(24)
    },
    image: {
        marginRight: getSizeFromWidth(16),
        width: 74,
        height: 74
    },
    itemTitle: {
        fontWeight: 'bold',
        color: '#4F585E',
        fontSize: 16,
        lineHeight: 16,
        marginRight: getSizeFromWidth(15)
    },
    itemText: {
        fontSize: 12,
        marginTop: 0,
        marginBottom: 'auto',
        color: COLORS.GREY02
    },
    itemRowTitle: {
        marginBottom: getSizeFromHeight(2),
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    borderBottom: {
        paddingVertical: getSizeFromHeight(16),
        flexDirection: 'row',
        borderBottomColor: COLORS.GREY_BORDER,
        borderBottomWidth: 1
    },
    itemWithoutBorderBottom: {
        paddingVertical: getSizeFromHeight(16),
        flexDirection: 'row'
    },
    textOrange: {
        color: COLORS.ORANGE,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: getSizeFromWidth(15)
    },
    textStrike: {
        fontSize: 12,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'baseline'
    }
});

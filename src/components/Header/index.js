import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { images } from '../../assets/images';
import { COLORS } from '../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
import { textStyles } from '../styles/text';

export default function Header({
    title = '',
    subtitle = '',
    onBack = () => {}
}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.positionBtn} onPress={onBack}>
                <Image source={images.backBlack} style={styles.backImage} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <Text
                    style={[
                        textStyles.title,
                        { marginBottom: getSizeFromHeight(5) }
                    ]}>
                    {title}
                </Text>
                {subtitle ? (
                    <Text style={{ color: COLORS.GREY02 }}>{subtitle}</Text>
                ) : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: getCommonPaddingHorizontal(),
        borderBottomColor: COLORS.GREY_LIGHTER01,
        borderBottomWidth: 1,
        paddingBottom: getSizeFromHeight(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white'
    },
    positionBtn: {
        left: getCommonPaddingHorizontal(),
        position: 'absolute',
        top: 10,
        bottom: 0,
        margin: 0,
        zIndex: 1
    },
    backImage: {
        width: getSizeFromHeight(8),
        height: getSizeFromHeight(14)
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    }
});

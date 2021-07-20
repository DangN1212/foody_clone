import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function Item({ data }) {
    const [day, month] = data.exp.split('-');

    return (
        <ImageBackground
            source={images.backgroundCode}
            style={styles.background}>
            <View style={styles.container}>
                <View style={styles.square}>
                    <Text style={styles.squareText}>{data.value}</Text>
                    <Text style={styles.squareText}>%</Text>
                </View>
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.sub}>{data.sub}</Text>
                    <Text style={styles.code}>{data.code}</Text>
                </View>
                <View style={styles.exp}>
                    <Text style={styles.orange}>exp</Text>
                    <Text styles={[styles.expText, { marginBottom: 5 }]}>
                        {day}
                    </Text>
                    <Text styles={styles.expText}>{month}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        marginHorizontal: getCommonPaddingHorizontal(),
        marginBottom: getCommonPaddingHorizontal(),
        height: 90,
        shadowColor: '#000000',
        shadowOpacity: 0.12,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingLeft: getSizeFromWidth(20),
        paddingVertical: 10,
        paddingRight: 10
    },
    square: {
        width: 68,
        height: 68,
        borderRadius: 8,
        backgroundColor: COLORS.GREY_DARKER01,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: getSizeFromWidth(10)
    },
    squareText: {
        fontSize: 20,
        color: 'white'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.GREY_DARKER01,
        marginBottom: 5
    },
    sub: {
        color: COLORS.GREY03,
        fontSize: 12
    },
    code: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.GREY_DARKER01,
        textTransform: 'uppercase',
        marginBottom: 0,
        marginTop: 'auto'
    },
    exp: {
        marginRight: 0,
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    orange: {
        color: COLORS.ORANGE02,
        fontSize: 12,
        marginBottom: 14,
        textTransform: 'capitalize'
    },
    expText: {
        color: COLORS.GREY_DARKER01,
        fontSize: 12,
        textAlign: 'center'
    }
});

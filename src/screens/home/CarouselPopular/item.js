import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS, ROUTES } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function Item({ data, index, height }) {
    const navigation = useNavigation();

    const handleClickRestaurant = params => {
        navigation.navigate(ROUTES.RESTAURANT);
    };

    return (
        <View style={styles.wrapImage}>
            <TouchableOpacity onPress={handleClickRestaurant}>
                <Image
                    source={data.image}
                    style={{
                        width: '100%'
                    }}
                />
                <View style={styles.wrapText}>
                    <Text style={styles.title}>{data.name}</Text>
                    <Text style={styles.text}>{data.address}</Text>
                    <View style={styles.flexRow}>
                        <View style={{ ...styles.textInfo, ...styles.flexRow }}>
                            <Image source={images.clock} style={styles.image} />
                            <Text>8H:00</Text>
                        </View>
                        <View style={styles.point}></View>
                        <View style={{ ...styles.textInfo, ...styles.flexRow }}>
                            <Text>{data.shipping_fee_per_km}</Text>
                        </View>
                        <View
                            style={{
                                ...styles.textInfo,
                                ...styles.flexRow,
                                ...styles.starItem
                            }}>
                            <Image source={images.star} style={styles.image} />
                            <Text>5</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapImage: {
        borderRadius: 12,
        overflow: 'hidden',
        marginLeft: getSizeFromWidth(24)
    },
    wrapText: {
        padding: getSizeFromWidth(12),
        backgroundColor: 'white'
    },
    title: {
        color: COLORS.GREY_DARKER01,
        fontSize: 16,
        fontWeight: 'bold'
    },
    text: {
        color: COLORS.GREY02,
        fontSize: 12,
        marginTop: getSizeFromHeight(12),
        marginBottom: getSizeFromHeight(8)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInfo: {
        color: COLORS.GREY_DARKER01,
        fontSize: 12
    },
    point: {
        width: 4,
        height: 4,
        backgroundColor: COLORS.GREY_DARKER01,
        borderRadius: 25,
        marginHorizontal: getSizeFromWidth(8)
    },
    image: {
        marginRight: getSizeFromWidth(6)
    },
    starItem: {
        marginLeft: getSizeFromWidth(24)
    }
});

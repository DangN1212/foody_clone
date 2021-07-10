import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { images } from '../../../assets/images';
import { COLORS, ROUTES } from '../../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { textStyles } from '../../../components/styles/text';

export default function RestaurantInfo() {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();

    const handleBack = params => {
        navigation.navigate(ROUTES.RESTAURANT);
    };

    return (
        <View style={styles.backgroundWhite}>
            <View style={{ paddingTop: inset.top }}></View>
            <View style={styles.flexRowTitle}>
                <TouchableOpacity
                    style={styles.buttonWrap}
                    onPress={handleBack}>
                    <Image source={images.close} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.title}>Eatries Info</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.name}>Pizzon - Crib Ln</Text>
                <View style={styles.flexRow}>
                    <Text
                        style={{
                            ...textStyles.restaurantLabel,
                            marginRight: 10
                        }}>
                        Fast Food
                    </Text>
                    <Text style={textStyles.restaurantLabel}>
                        Western cuisine
                    </Text>
                </View>

                <View
                    style={{
                        ...styles.flexRow,
                        marginTop: getSizeFromHeight(17)
                    }}>
                    <View
                        style={{
                            ...styles.textInfo,
                            ...styles.flexRow
                        }}>
                        <Image source={images.clock} style={styles.image02} />
                        <Text>5 mins</Text>
                    </View>
                    <View style={styles.point}></View>
                    <View
                        style={{
                            ...styles.textInfo,
                            ...styles.flexRow
                        }}>
                        <Text>1.1 km</Text>
                    </View>
                    <View
                        style={{
                            ...styles.textInfo,
                            ...styles.flexRow,
                            ...styles.starItem
                        }}>
                        <Image source={images.star} style={styles.image02} />
                        <Text>5</Text>
                    </View>
                    <Text
                        style={{
                            ...textStyles.colorGray,
                            marginLeft: getSizeFromWidth(10)
                        }}>
                        (200+ rated)
                    </Text>
                </View>
            </View>

            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Contact Information</Text>

                <View style={{ ...styles.flexRow, ...styles.rowInfo }}>
                    <Image source={images.mapPin} style={styles.icon} />
                    <Text style={styles.text}>
                        Address : 444 Crib Ln, Halifax
                    </Text>
                </View>
                <View style={{ ...styles.flexRow, ...styles.rowInfo }}>
                    <Image source={images.phone} style={styles.icon} />
                    <Text style={styles.text}>Phone 1 : (133) 567-345</Text>
                </View>
                <View style={{ ...styles.flexRow, ...styles.rowInfo }}>
                    <Image source={images.phone} style={styles.icon} />
                    <Text style={styles.text}>Phone 2 : (133) 567-345</Text>
                </View>
            </View>
            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Opening Hours</Text>

                <View style={{ ...styles.flexRow, ...styles.rowInfo }}>
                    <Image source={images.calendar} style={styles.icon} />
                    <Text style={styles.text}>Weekdays</Text>
                    <Text style={{ ...styles.text, ...styles.flexEnd }}>
                        09:00 - 22:00
                    </Text>
                </View>
                <View style={{ ...styles.flexRow, ...styles.rowInfo }}>
                    <Image source={images.calendar} style={styles.icon} />
                    <Text style={styles.text}>Weekdends</Text>
                    <Text style={{ ...styles.text, ...styles.flexEnd }}>
                        14:00 - 22:00
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundWhite: {
        backgroundColor: '#ffffff',
        flex: 1
    },
    container: {
        paddingHorizontal: getCommonPaddingHorizontal(),
        borderBottomColor: COLORS.GREY_BORDER,
        borderBottomWidth: 4,
        paddingBottom: getSizeFromHeight(16)
    },
    flexRowTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        paddingHorizontal: getCommonPaddingHorizontal(),
        paddingBottom: getSizeFromHeight(16)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonWrap: {
        position: 'absolute',
        left: getCommonPaddingHorizontal(),
        top: 0
    },
    image: {
        width: getSizeFromWidth(24),
        height: getSizeFromWidth(24)
    },
    title: {
        color: COLORS.GREY_DARKER01,
        fontSize: 20,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: getSizeFromHeight(13)
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
    image02: {
        marginRight: getSizeFromWidth(6)
    },
    starItem: {
        marginLeft: getSizeFromWidth(10)
    },
    contact: {
        paddingHorizontal: getCommonPaddingHorizontal(),
        paddingTop: getSizeFromHeight(16)
    },
    contactTitle: {
        fontSize: 20,
        color: COLORS.GREY_DARKER01,
        marginBottom: getSizeFromHeight(15)
    },
    icon: {
        width: getSizeFromWidth(18),
        height: getSizeFromWidth(18),
        marginRight: 10
    },
    text: {
        color: COLORS.GREY03
    },
    rowInfo: {
        marginBottom: getSizeFromHeight(10)
    },
    flexEnd: {
        marginLeft: 'auto',
        marginRight: 0
    }
});

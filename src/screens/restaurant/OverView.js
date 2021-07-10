import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { images } from '../../assets/images';
import { textStyles } from '../../components/styles/text';
import { COLORS, ROUTES } from '../../ultilities/constant';
import {
    DEVICE_WIDTH,
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
export default function OverView({ setEnableStickyHeader, headerRef }) {
    const navigation = useNavigation();
    const handleLayoutChange = e => {
        console.log(e);
    };

    const handleNavigateToInfo = () => {
        navigation.navigate(ROUTES.RESTAURANT_INFO);
    };

    const handleBack = params => {
        navigation.navigate(ROUTES.HOME);
    };

    return (
        <View style={styles.blockTop}>
            <TouchableOpacity
                style={styles.buttonInfo}
                onPress={handleNavigateToInfo}>
                <Image
                    source={images.RestaurantInfo}
                    style={styles.imageInfo}
                />
            </TouchableOpacity>
            <View style={styles.rowButtonTop} onLayout={handleLayoutChange}>
                <TouchableOpacity
                    style={{ ...styles.buttonTop, ...styles.buttonBack }}
                    onPress={handleBack}>
                    <Image
                        source={images.RestaurantBack}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.name}>Pizzon - Crib Ln</Text>

                <TouchableOpacity
                    style={{ ...styles.buttonTop, ...styles.buttonHeart }}>
                    <Image
                        source={images.RestaurantHeart}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.flexRow}>
                <Text
                    style={{
                        ...textStyles.restaurantLabel,
                        marginRight: 10
                    }}>
                    Fast Food
                </Text>
                <Text style={textStyles.restaurantLabel}>Western cuisine</Text>
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
            <View style={styles.discordRow}>
                <Image
                    source={images.RestaurantDiscord}
                    style={styles.imagesDiscord}
                />
                <Text>Discount 40% pizza</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    rowButtonTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getCommonPaddingHorizontal()
    },
    buttonTop: {
        width: getSizeFromWidth(28),
        height: getSizeFromWidth(28)
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonInfo: {
        position: 'absolute',
        top: getSizeFromHeight(-15),
        right: getCommonPaddingHorizontal(),
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 40,
        height: getSizeFromWidth(28),
        width: getSizeFromWidth(28),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageInfo: {
        height: getSizeFromWidth(20),
        width: getSizeFromWidth(20)
    },
    blockTop: {
        paddingTop: getSizeFromHeight(20),
        paddingBottom: getSizeFromHeight(16),
        paddingHorizontal: getCommonPaddingHorizontal(),
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: getSizeFromHeight(185),
        backgroundColor: 'white'
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
    imagesDiscord: {
        width: getSizeFromWidth(14),
        height: getSizeFromWidth(14),
        marginRight: getSizeFromWidth(5)
    },
    discordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: getSizeFromHeight(16),
        marginTop: getSizeFromHeight(16),
        borderTopColor: COLORS.GREY_LIGHTER01,
        borderTopWidth: 1
    },
    buttonTop: {
        width: getSizeFromWidth(28),
        height: getSizeFromWidth(28),
        position: 'absolute',
        top: -getSizeFromHeight(140)
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonHeart: {
        right: 0
    }
});

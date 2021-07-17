import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { images } from '../../assets/images';
import SafeViewAreaTop from '../../components/SafeViewArea/index';
import { textStyles } from '../../components/styles/text';
import { COLORS } from '../../ultilities/constant';
import {
    DEVICE_HEIGHT,
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
import Contact from './Contact';
import OrderSummary from './OrderSummary';
import PaymentMethod from './PaymentMethod';
import PlaceOrder from './PlaceOrder';
import { useNavigation } from '@react-navigation/native';

export default function CheckoutOrder() {
    const navigation = useNavigation();

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1
            }}>
            <SafeViewAreaTop />
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.positionBtn}
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={images.backBlack}
                            style={styles.backImage}
                        />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text
                            style={[
                                textStyles.title,
                                { marginBottom: getSizeFromHeight(5) }
                            ]}>
                            Pizzon - Crib Ln
                        </Text>
                        <Text style={{ color: COLORS.GREY02 }}>
                            1.1km - 15 mins
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View
                        style={[
                            styles.flexRow,
                            { marginBottom: getSizeFromHeight(24) }
                        ]}>
                        <Text style={styles.title02}>Deliver to</Text>
                        <Text style={styles.textRight}>Change</Text>
                    </View>
                    <View style={styles.flexRow01}>
                        <Image
                            source={images.checkoutOrder}
                            style={styles.imageLocation}
                        />
                        <View
                            style={{
                                flexShrink: 1
                            }}>
                            <Text
                                style={{
                                    marginBottom: getSizeFromHeight(10)
                                }}>
                                this is Mills Yard, North Bridge Hawai USD
                            </Text>
                            <Text style={styles.info}>
                                + Floor / Unit number
                            </Text>
                            <Text style={styles.info}>
                                + Floor / Unit number
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={images.clock02}
                                style={styles.clockImg}
                            />
                            <Text>Deliver at - 10:00 AM</Text>
                        </View>
                        <Text style={styles.textRight}>Change</Text>
                    </View>
                </View>
                <Contact styles={styles} />
                <OrderSummary stylesCommon={styles} />
                <PaymentMethod stylesCommon={styles} />
            </ScrollView>
            <PlaceOrder />
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
        left: 0,
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
    flexRow01: {
        flexDirection: 'row',
        paddingBottom: getCommonPaddingHorizontal(),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.GREY_BORDER,
        marginBottom: getSizeFromHeight(17)
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: getCommonPaddingHorizontal(24),
        paddingVertical: getSizeFromHeight(16),
        borderBottomColor: COLORS.GREY_BORDER,
        borderBottomWidth: 4,
        borderStyle: 'solid'
    },
    title02: {
        color: COLORS.GREY_DARKER01,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textRight: {
        color: COLORS.ORANGE,
        fontSize: 14
    },
    imageLocation: {
        width: 88,
        height: 88,
        marginRight: getSizeFromWidth(12)
    },
    info: {
        color: COLORS.GREY02,
        marginTop: getSizeFromHeight(5)
    },
    clockImg: {
        width: 24,
        height: 24,
        marginRight: getSizeFromWidth(17)
    }
});

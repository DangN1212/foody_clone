import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function PaymentMethod({ stylesCommon }) {
    return (
        <View style={[stylesCommon.container]}>
            <Text
                style={[
                    stylesCommon.title02,
                    { marginBottom: getSizeFromHeight(16) }
                ]}>
                Payment Method
            </Text>
            <View
                style={[
                    stylesCommon.flexRow,
                    {
                        alignItems: 'stretch',
                        marginBottom: getSizeFromHeight(16)
                    }
                ]}>
                <TouchableOpacity
                    style={[styles.cardActive, stylesCommon.flexRow]}>
                    <Text style={styles.cardTextActive}>Cash</Text>
                    <Image source={images.cash} style={styles.cardImg} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.card,
                        stylesCommon.flexRow,
                        {
                            marginHorizontal: getSizeFromWidth(16)
                        }
                    ]}>
                    <Text style={styles.cardText}>Card</Text>
                    <Image source={images.card} style={styles.cardImg} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.card,
                        stylesCommon.flexRow,
                        { justifyContent: 'center' }
                    ]}>
                    <Image source={images.dotted} style={styles.dotted} />
                </TouchableOpacity>
            </View>
            <View style={[stylesCommon.flexRow, { alignItems: 'stretch' }]}>
                <TextInput
                    placeholder="Promo Code or Voucher"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.applyBtn}>
                    <Text
                        style={{
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: 'white'
                        }}>
                        apply
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardActive: {
        backgroundColor: COLORS.ORANGE_LIGHTER,
        flex: 1,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    card: {
        flex: 1,
        backgroundColor: COLORS.GREY_LIGHTER,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    cardText: {
        color: COLORS.GREY02,
        fontSize: 15
    },
    cardTextActive: {
        color: COLORS.ORANGE,
        fontSize: 15
    },
    dotted: {
        width: 40,
        height: 8
    },
    input: {
        borderColor: COLORS.GREY,
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        flex: 250,
        paddingLeft: getSizeFromWidth(16)
    },
    applyBtn: {
        flex: 77,
        justifyContent: 'center',
        backgroundColor: COLORS.GREY_LIGHTER,
        paddingVertical: 10,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    }
});

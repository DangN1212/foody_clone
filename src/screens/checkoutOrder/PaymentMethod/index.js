import { useNavigation } from '@react-navigation/native';
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
import { COLORS, ROUTES } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function PaymentMethod({ stylesCommon }) {
    const navigation = useNavigation();
    const onGoToPromocode = () => {
        navigation.navigate(ROUTES.PROMO_CODE_APPLY);
    };

    return (
        <>
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
                    onPress={onGoToPromocode}
                    style={[
                        styles.card,
                        stylesCommon.flexRow,
                        { justifyContent: 'center' }
                    ]}>
                    <Image source={images.dotted} style={styles.dotted} />
                </TouchableOpacity>
            </View>
        </>
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
    }
});

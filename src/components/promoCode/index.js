import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../../ultilities/constant';
import { getSizeFromWidth } from '../../ultilities/responsive';

export default function PromoCode() {
    return (
        <View style={styles.flexRow}>
            <TextInput
                placeholder="Promo Code or Voucher"
                style={styles.input}
            />
            <TouchableOpacity style={styles.applyBtn}>
                <Text style={styles.text}>apply</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    input: {
        borderColor: COLORS.GREY,
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderRightWidth: 0,
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
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white'
    }
});

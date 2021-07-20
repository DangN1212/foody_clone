import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import PromoCode from '../../components/promoCode';
import SafeViewAreaTop from '../../components/SafeViewArea';

import { COLORS, ROUTES } from '../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight
} from '../../ultilities/responsive';
import { data } from './data';
import Item from './Item';

export default function PromoCodeList() {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.navigate(ROUTES.CHECKOUT_ORDER);
    };

    const renderItem = ({ item }) => {
        return <Item data={item} />;
    };

    return (
        <View style={styles.container}>
            <SafeViewAreaTop />
            <Header title="Promo Code Apply" onBack={onBack} />
            <View
                style={{
                    paddingHorizontal: getCommonPaddingHorizontal(),
                    marginVertical: getSizeFromHeight(24)
                }}>
                <PromoCode />
            </View>
            <FlatList
                stickyHeaderIndices={[0]}
                ListHeaderComponent={
                    <Text style={styles.textSelect}>Select your vouchers</Text>
                }
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    textSelect: {
        marginBottom: getSizeFromHeight(24),
        paddingHorizontal: getCommonPaddingHorizontal(),
        fontSize: 20,
        color: COLORS.GREY_DARKER01,
        backgroundColor: 'white'
    }
});

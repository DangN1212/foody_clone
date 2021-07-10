import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../../assets/images';
import { COLORS, ROUTES } from '../../../ultilities/constant';
import { useNavigation } from '@react-navigation/native';

import {
    DEVICE_WIDTH,
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

export default function RestaurantBackgroundHeader(props) {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <>
            <ImageBackground
                source={images.Restaurant}
                style={styles.background}>
                <View style={{ paddingTop: inset.top }}></View>
            </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    background: {
        width: DEVICE_WIDTH,
        height: getSizeFromHeight(242),
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1
    },
    rowButtonTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getCommonPaddingHorizontal()
    }
});

import { StyleSheet } from 'react-native';
import { COLORS } from '../../ultilities/constant';
import {
    getSizeFromWidth,
    getSizeFromHeight,
    getCommonPaddingHorizontal
} from '../../ultilities/responsive';

export const textStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
    text: {
        marginTop: getSizeFromHeight(16),
        marginBottom: getSizeFromHeight(32)
    },
    colorOrgange: {
        color: COLORS.ORANGE
    },
    text02: {
        marginBottom: getSizeFromHeight(24)
    },
    colorGray: {
        color: '#9B9B9B'
    },
    carouselWrapTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: getCommonPaddingHorizontal(),
        marginBottom: getSizeFromHeight(16)
    },
    carouselTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.GREY_DARKER01
    },
    carouselViewAll: {
        color: COLORS.ORANGE,
        fontSize: 12
    },
    restaurantLabel: {
        fontSize: 12,
        paddingHorizontal: getSizeFromWidth(8),
        paddingVertical: getSizeFromHeight(5),
        backgroundColor: '#F0F0F0',
        borderRadius: 4,
        overflow: 'hidden'
    }
});

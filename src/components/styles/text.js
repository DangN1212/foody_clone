import { StyleSheet } from 'react-native';
import {
    getSizeFromWidth,
    getSizeFromHeight
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
        color: '#FB6D3B'
    },
    text02: {
        marginBottom: getSizeFromHeight(24)
    }
});

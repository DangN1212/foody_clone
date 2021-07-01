import { StyleSheet } from 'react-native';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';

export const inputStyles = StyleSheet.create({
    input: {
        borderColor: '#DBDFE3',
        borderWidth: 1,
        borderRadius: 5,
        width: getSizeFromWidth(327),
        height: getSizeFromHeight(50),
        padding: 10,
        marginBottom: getSizeFromHeight(16)
    }
});

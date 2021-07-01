import { StyleSheet } from 'react-native';
import { getSizeFromWidth } from '../../ultilities/responsive';

export const flexContainer = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        paddingHorizontal: getSizeFromWidth(24)
    }
});

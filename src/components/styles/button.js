import { StyleSheet } from 'react-native';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';

export const buttonStyles = StyleSheet.create({
    buttonCommon: {
        width: getSizeFromWidth(327),
        height: getSizeFromHeight(46),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonSignIn: {
        backgroundColor: '#FB6D3B'
    },
    buttonFb: {
        backgroundColor: '#4460A0'
    },
    buttonGg: {
        backgroundColor: '#4285F4'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    squareIcon: {
        width: getSizeFromWidth(30),
        height: getSizeFromWidth(30),
        backgroundColor: '#ffffff',
        borderRadius: 5,
        position: 'absolute',
        marginVertical: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        left: getSizeFromWidth(8)
    }
});

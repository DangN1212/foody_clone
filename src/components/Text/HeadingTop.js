import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../../ultilities/constant';

export default function HeadingTop({ title = '' }) {
    return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.GREY_DARKER01,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

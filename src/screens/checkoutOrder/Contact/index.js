import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../../../ultilities/constant';
import { getSizeFromHeight } from '../../../ultilities/responsive';

export default function Contact({ styles }) {
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.flexRow,
                    { marginBottom: getSizeFromHeight(8) }
                ]}>
                <Text style={styles.title02}>Contact</Text>
                <Text style={styles.textRight}>Edit</Text>
            </View>
            <Text style={{ color: COLORS.GREY03, fontSize: 15 }}>
                Ocoho, (424) 545-1818
            </Text>
        </View>
    );
}

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
import { getSizeFromWidth } from '../../../ultilities/responsive';

export default function Item({ data, index, height }) {
    return (
        <View style={styles.wrapImage}>
            <Image
                source={data.image}
                style={{
                    width: '100%',
                    height: height
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapImage: {
        borderRadius: 8,
        overflow: 'hidden',
        marginLeft: getSizeFromWidth(24)
    }
});

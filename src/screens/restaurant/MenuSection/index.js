import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';
import MenuItem from './MenuItem';
export default function MenuSection({ data, onPressMenu }) {
    return (
        <View style={styles.section}>
            <Text style={styles.bigTitle}>{data.title}</Text>
            {data.items.map((item, index) => {
                return (
                    <MenuItem
                        data={item}
                        key={index}
                        isLast={index === data.items.length - 1}
                        onPressMenu={onPressMenu}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        zIndex: 1,
        paddingTop: getSizeFromHeight(24),
        paddingBottom: getSizeFromHeight(10),
        backgroundColor: '#ffffff',
        borderTopWidth: getSizeFromHeight(5),
        borderTopColor: '#efefef'
    },
    bigTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: getSizeFromWidth(24)
    }
});

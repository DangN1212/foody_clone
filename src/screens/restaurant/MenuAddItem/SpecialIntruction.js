import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { COLORS } from '../../../ultilities/constant';
import { getSizeFromHeight } from '../../../ultilities/responsive';

export default function SpecialIntruction() {
    const [active, setActive] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => setActive(!active)}>
                + Special instruction
            </Text>
            {active ? (
                <TextInput
                    placeholder="special "
                    style={{
                        borderColor: '#DBDFE3',
                        padding: 10,
                        borderWidth: 1,
                        marginVertical: 5,
                        borderRadius: 5
                    }}
                />
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: getSizeFromHeight(16),
        borderBottomColor: COLORS.GREY_LIGHTER01,
        borderBottomWidth: 1,
        marginBottom: getSizeFromHeight(16)
    },
    text: {
        color: COLORS.ORANGE02
    }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { images } from '../../../assets/images';
import {
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

import { connect } from 'react-redux';
import { decrement, increment } from '../../../redux/action/Counter';
import { buttonStyles } from '../../../components/styles/button';

const MenuAddItem = props => {
    const { increment, decrement, counter } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerMenu}>
                <Text style={styles.textTitle}>Add Item</Text>
                <View style={styles.flexRow}>
                    <View>
                        <TouchableOpacity onPress={decrement}>
                            <Image source={images.Minus} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.numberValue}>{counter}</Text>
                    <View>
                        <TouchableOpacity onPress={increment}>
                            <Image source={images.Plus} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={increment}
                    style={{
                        ...buttonStyles.buttonSignIn,
                        ...buttonStyles.buttonCommon,
                        marginTop: 10
                    }}>
                    <Text style={styles.buttonText}>Add to bag</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(MenuAddItem);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT,
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: getSizeFromHeight(50)
    },
    numberValue: {
        marginHorizontal: getSizeFromWidth(10),
        textAlign: 'center',
        width: 70
    },
    containerMenu: {
        paddingVertical: getSizeFromHeight(16),
        paddingHorizontal: getSizeFromWidth(24),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT - getSizeFromHeight(50)
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 24
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase'
    }
});

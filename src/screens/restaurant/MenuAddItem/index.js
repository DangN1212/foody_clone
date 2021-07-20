import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { images } from '../../../assets/images';
import {
    DEVICE_HEIGHT,
    DEVICE_WIDTH,
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';

import { connect } from 'react-redux';
import { decrement, increment } from '../../../redux/action/Counter';
import { buttonStyles } from '../../../components/styles/button';
import { COLORS, ROUTES } from '../../../ultilities/constant';
import { flexContainer } from '../../../components/styles/flexContainer';
import { textStyles } from '../../../components/styles/text';
import CheckBoxItem from './CheckBoxItem';
import SpecialIntruction from './SpecialIntruction';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeadingTop from '../../../components/Text/HeadingTop';

const MenuAddItem = props => {
    const { increment, decrement, counter, onClose } = props;
    const inset = useSafeAreaInsets();
    const price = 15.0;
    return (
        <View style={styles.container}>
            <ScrollView
                style={{
                    height: DEVICE_HEIGHT - 40,
                    paddingBottom: inset.bottom
                }}>
                <View style={styles.containerMenu}>
                    <View style={(styles.flexRow, styles.rowTitle)}>
                        <TouchableOpacity
                            style={styles.buttonWrap}
                            onPress={onClose}>
                            <Image source={images.close} style={styles.image} />
                        </TouchableOpacity>
                        <HeadingTop title="Add item" />
                    </View>
                    <View style={styles.directionRow}>
                        <Image source={images.ResItem} style={styles.resImg} />
                        <View
                            style={{
                                flex: 1
                            }}>
                            <View style={styles.itemRowTitle}>
                                <Text style={styles.itemTitle}>
                                    Shrimp Pizza - M
                                </Text>
                                <Text style={styles.price}>$ {price}</Text>
                            </View>
                            <View style={styles.itemText}>
                                <Text style={{ ...textStyles.colorGray }}>
                                    +Potato, +Ketchup
                                </Text>
                            </View>
                            <View style={styles.itemRow}>
                                <Image
                                    source={images.orderCount}
                                    style={styles.imageCount}
                                />
                                <Text style={{ ...textStyles.colorGray }}>
                                    999+
                                </Text>
                            </View>
                        </View>
                    </View>
                    <CheckBoxItem />
                    <CheckBoxItem />
                    <CheckBoxItem />
                    <SpecialIntruction />
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
                        onPress={onClose}
                        style={{
                            ...buttonStyles.buttonSignIn,
                            ...buttonStyles.buttonCommon,
                            marginTop: getSizeFromHeight(16)
                        }}>
                        <Text style={styles.buttonText}>
                            Add to bag{' '}
                            {counter > 0 ? `($${counter * price})` : null}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: getSizeFromHeight(50),
        zIndex: 4
    },
    numberValue: {
        marginHorizontal: getSizeFromWidth(10),
        textAlign: 'center',
        width: 70
    },
    containerMenu: {
        paddingVertical: getSizeFromHeight(24),
        paddingHorizontal: getSizeFromWidth(24),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#fff',
        width: DEVICE_WIDTH
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
    },
    image: {
        width: getSizeFromWidth(24),
        height: getSizeFromWidth(24)
    },
    buttonWrap: {
        position: 'absolute',
        left: 0,
        zIndex: 2
    },
    rowTitle: {
        paddingBottom: getSizeFromHeight(16),
        borderBottomColor: COLORS.GREY_LIGHTER01,
        borderBottomWidth: 1,
        marginBottom: getCommonPaddingHorizontal()
    },
    resImg: {
        marginRight: getSizeFromWidth(16),
        width: getSizeFromWidth(74),
        height: getSizeFromWidth(74)
    },
    itemRowTitle: {
        marginBottom: getSizeFromHeight(2),
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontWeight: 'bold',
        color: '#4F585E',
        fontSize: 16,
        lineHeight: 16,
        marginBottom: getSizeFromHeight(5)
    },
    itemText: {
        fontSize: 12,
        marginTop: 0,
        marginBottom: 'auto',
        color: COLORS.GREY02
    },
    price: {
        color: COLORS.ORANGE,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 0,
        marginLeft: 'auto'
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginBottom: getCommonPaddingHorizontal()
    },
    imageCount: {
        width: getSizeFromWidth(10),
        height: getSizeFromHeight(12),
        marginRight: getSizeFromWidth(7)
    },
    itemRow: {
        marginTop: 'auto',
        marginBottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

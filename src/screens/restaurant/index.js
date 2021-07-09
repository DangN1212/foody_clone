import React from 'react';
import {
    View,
    Text,
    Image,
    ImageStore,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { images } from '../../assets/images/';
import { textStyles } from '../../components/styles/text';
import { COLORS } from '../../ultilities/constant';
import {
    DEVICE_WIDTH,
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
import Checkout from './Checkout';
import MenuAddItem from './MenuAddItem';
import MenuSection from './MenuSection';
import { connect } from 'react-redux';
class Restaurant extends React.Component {
    state = {
        foodSelected: false,
        menu: [
            {
                title: 'Special delivery',
                items: [
                    {
                        title: 'Shrimp pizza',
                        kcal: 475,
                        detail: 'Shrimp, mushroom, cheese, tomato',
                        price: '12.00',
                        oldPrice: '20.00'
                    },
                    {
                        title: 'Pinnacle pizza',
                        kcal: 500,
                        detail: 'Luna’s howl, hush, delirium, revoker',
                        price: '99.00',
                        oldPrice: '20.00'
                    },
                    {
                        title: 'House Stoke Pizza ',
                        kcal: 500,
                        detail: 'Pig, pog, pet, pird',
                        price: '15.00',
                        oldPrice: '20.00'
                    }
                ]
            },
            {
                title: 'Hot Deals',
                items: [
                    {
                        title: 'Hot Deals Shrimp pizza',
                        kcal: 475,
                        detail: 'Shrimp, mushroom, cheese, tomato',
                        price: '12.00',
                        oldPrice: '20.00'
                    },
                    {
                        title: 'Hot Deals Pinnacle pizza',
                        kcal: 500,
                        detail: 'Luna’s howl, hush, delirium, revoker',
                        price: '99.00',
                        oldPrice: '20.00'
                    },
                    {
                        title: 'Hot Deals House Stoke Pizza ',
                        kcal: 500,
                        detail: 'Pig, pog, pet, pird',
                        price: '15.00',
                        oldPrice: '20.00'
                    }
                ]
            }
        ]
    };

    handleBack = params => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <SafeAreaInsetsContext.Consumer>
                {inset => (
                    <>
                        <ScrollView>
                            <ImageBackground
                                source={images.Restaurant}
                                style={styles.background}>
                                <View style={{ paddingTop: inset.top }}></View>
                                <View style={styles.rowButtonTop}>
                                    <TouchableOpacity
                                        style={styles.buttonTop}
                                        onPress={this.handleBack}>
                                        <Image
                                            source={images.RestaurantBack}
                                            style={styles.image}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.buttonTop}>
                                        <Image
                                            source={images.RestaurantHeart}
                                            style={styles.image}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <View style={styles.blockTop}>
                                <TouchableOpacity style={styles.buttonInfo}>
                                    <Image
                                        source={images.RestaurantInfo}
                                        style={styles.imageInfo}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.name}>
                                    Pizzon - Crib Ln
                                </Text>
                                <View style={styles.flexRow}>
                                    <Text
                                        style={{
                                            ...textStyles.restaurantLabel,
                                            marginRight: 10
                                        }}>
                                        Fast Food
                                    </Text>
                                    <Text style={textStyles.restaurantLabel}>
                                        Western cuisine
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        ...styles.flexRow,
                                        marginTop: getSizeFromHeight(17)
                                    }}>
                                    <View
                                        style={{
                                            ...styles.textInfo,
                                            ...styles.flexRow
                                        }}>
                                        <Image
                                            source={images.clock}
                                            style={styles.image02}
                                        />
                                        <Text>5 mins</Text>
                                    </View>
                                    <View style={styles.point}></View>
                                    <View
                                        style={{
                                            ...styles.textInfo,
                                            ...styles.flexRow
                                        }}>
                                        <Text>1.1 km</Text>
                                    </View>
                                    <View
                                        style={{
                                            ...styles.textInfo,
                                            ...styles.flexRow,
                                            ...styles.starItem
                                        }}>
                                        <Image
                                            source={images.star}
                                            style={styles.image02}
                                        />
                                        <Text>5</Text>
                                    </View>
                                    <Text
                                        style={{
                                            ...textStyles.colorGray,
                                            marginLeft: getSizeFromWidth(10)
                                        }}>
                                        (200+ rated)
                                    </Text>
                                </View>
                                <View style={styles.discordRow}>
                                    <Image
                                        source={images.RestaurantDiscord}
                                        style={styles.imagesDiscord}
                                    />
                                    <Text>Discount 40% pizza</Text>
                                </View>
                            </View>
                            {this.state.menu.map((section, index) => {
                                return (
                                    <MenuSection
                                        data={section}
                                        key={index}
                                        onPressMenu={() => {
                                            this.setState({
                                                foodSelected: true
                                            });
                                        }}
                                    />
                                );
                            })}
                        </ScrollView>
                        {this.props.counter > 0 ? (
                            <Checkout value={this.props.counter} />
                        ) : null}
                        {this.state.foodSelected ? (
                            <MenuAddItem
                                onClose={() =>
                                    this.setState({ foodSelected: false })
                                }
                            />
                        ) : null}
                    </>
                )}
            </SafeAreaInsetsContext.Consumer>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

export default connect(mapStateToProps)(Restaurant);
const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    background: {
        width: DEVICE_WIDTH,
        height: getSizeFromHeight(242)
    },
    rowButtonTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getCommonPaddingHorizontal()
    },
    buttonTop: {
        width: getSizeFromWidth(28),
        height: getSizeFromWidth(28)
    },
    image: {
        width: '100%',
        height: '100%'
    },
    buttonInfo: {
        position: 'absolute',
        top: getSizeFromHeight(-30),
        right: getCommonPaddingHorizontal(),
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 40,
        height: getSizeFromWidth(28),
        width: getSizeFromWidth(28),
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageInfo: {
        height: getSizeFromWidth(20),
        width: getSizeFromWidth(20)
    },
    blockTop: {
        paddingTop: getSizeFromHeight(20),
        paddingBottom: getSizeFromHeight(16),
        paddingHorizontal: getCommonPaddingHorizontal(),
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: -getSizeFromHeight(60),
        backgroundColor: 'white'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: getSizeFromHeight(13)
    },
    textInfo: {
        color: COLORS.GREY_DARKER01,
        fontSize: 12
    },
    point: {
        width: 4,
        height: 4,
        backgroundColor: COLORS.GREY_DARKER01,
        borderRadius: 25,
        marginHorizontal: getSizeFromWidth(8)
    },
    image02: {
        marginRight: getSizeFromWidth(6)
    },
    starItem: {
        marginLeft: getSizeFromWidth(24)
    },
    imagesDiscord: {
        width: getSizeFromWidth(14),
        height: getSizeFromWidth(14),
        marginRight: getSizeFromWidth(5)
    },
    discordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: getSizeFromHeight(16),
        marginTop: getSizeFromHeight(16),
        borderTopColor: COLORS.GREY_LIGHTER01,
        borderTopWidth: 1
    },
    checkout: {
        backgroundColor: '#fff',
        width: getSizeFromWidth(311),
        position: 'absolute',
        left: getSizeFromWidth(32),
        bottom: getSizeFromHeight(27),
        shadowColor: '#000000',
        shadowOffset: { top: 0, right: 2, bottom: 32, left: 0 },
        paddingHorizontal: getSizeFromWidth(10),
        paddingVertical: getSizeFromHeight(8)
        // boxShadow: 0px 2px 32px 0px #0000001F;
    },
    imageCheckout: {
        width: getSizeFromWidth(30),
        height: getSizeFromHeight(30),
        marginRight: getSizeFromWidth(10)
    }
});

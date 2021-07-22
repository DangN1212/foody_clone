import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList
} from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
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
import RestaurantBackgroundHeader from './header';
import OverView from './OverView';

const Restaurant = props => {
    const [enableStickyHeader, setEnableStickyHeader] = useState(false);
    const [foodSelected, setFoodSelected] = useState(false);
    const [menu, setMenu] = useState([
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
    ]);

    const listRef = useRef(null);
    useEffect(() => {
        // console.log(12345, listRef.current);
    }, [listRef.current]);

    const handleScrollFlatList = e => {
        // console.log('scroll123', e);
        // console.log(listRef.current.getNode());
    };

    return (
        <SafeAreaInsetsContext.Consumer>
            {inset => (
                <>
                    <RestaurantBackgroundHeader />
                    <FlatList
                        ref={listRef}
                        onScroll={handleScrollFlatList}
                        ListHeaderComponent={
                            <OverView
                                // headerRef={listRef}
                                setEnableStickyHeader={setEnableStickyHeader}
                            />
                        }
                        stickyHeaderIndices={enableStickyHeader ? [0] : null}
                        data={menu}
                        renderItem={({ item }) => (
                            <MenuSection
                                data={item}
                                onPressMenu={() => {
                                    setFoodSelected(true);
                                }}
                            />
                        )}
                    />
                    <Checkout value={0} />
                    {foodSelected ? (
                        <MenuAddItem onClose={() => setFoodSelected(false)} />
                    ) : null}
                </>
            )}
        </SafeAreaInsetsContext.Consumer>
    );
};

export default Restaurant;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
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
        marginTop: getSizeFromHeight(185),
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

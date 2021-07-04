import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets/images';
import { COLORS, ROUTES } from '../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';

const TabImage = {
    [ROUTES.HOME]: {
        active: images.tabHomeActive,
        inActive: images.tabHome
    },
    [ROUTES.ORDERS]: {
        active: images.tabOrdersActive,
        inActive: images.tabOrders
    },
    [ROUTES.PROFILE]: {
        active: images.tabProfileActive,
        inActive: images.tabProfile
    },
    [ROUTES.SAVED]: {
        active: images.tabSavedActive,
        inActive: images.tabSaved
    }
};

export default function TabCustom({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const insets = useSafeAreaInsets();
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const handleNavigate = routeName => {
        navigation.navigate(routeName);
    };

    return (
        <>
            <View style={styles.wrapperTab}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = route.name;

                    const isFocused = state.index === index;

                    return (
                        <TouchableOpacity
                            style={{
                                ...styles.button,
                                ...(isFocused
                                    ? styles.buttonActive
                                    : styles.buttonInActive)
                            }}
                            onPress={() => handleNavigate(label)}
                            key={index + label}>
                            <View style={styles.flexRow}>
                                <Image
                                    source={
                                        isFocused
                                            ? TabImage[label].active
                                            : TabImage[label].inActive
                                    }
                                    style={styles.images}
                                />
                                {isFocused ? (
                                    <Text style={styles.textButton}>
                                        {label}
                                    </Text>
                                ) : null}
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={{ paddingBottom: insets.bottom }}></View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapperTab: {
        // height: getSizeFromHeight(81),
        flexDirection: 'row',
        paddingTop: getSizeFromHeight(16),
        borderTopColor: '#EAEAEA',
        borderTopWidth: 1,
        paddingHorizontal: getSizeFromWidth(24)
    },
    images: {},
    button: {
        borderRadius: 40,
        height: getSizeFromHeight(36),
        paddingHorizontal: getSizeFromWidth(15)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonInActive: {
        flex: 72
    },
    buttonActive: {
        flex: 146,
        backgroundColor: COLORS.ORANGE_LIGHTER
    },
    textButton: {
        color: COLORS.ORANGE,
        marginLeft: 11
    }
});

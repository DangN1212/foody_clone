import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { images } from '../../assets/images';
import { textStyles } from '../../components/styles/text';
import { COLORS } from '../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';

export default function Home() {
    const insets = useSafeAreaInsets();
    return (
        <View>
            <View style={{ paddingTop: insets.top }}></View>
            <View style={styles.userInfo}>
                <View>
                    <Text style={styles.name}>
                        Hello, <Text style={textStyles.colorOrgange}>DAN</Text>
                    </Text>
                    <View style={styles.flexRow}>
                        <Text style={textStyles.colorGray}>
                            North Bridge, Halifax
                        </Text>
                        <Image
                            source={images.arrowOrangeDown}
                            style={styles.downIcon}
                        />
                    </View>
                </View>
                <Image source={images.avata} />
            </View>
            <View style={styles.searchRow}>
                <View style={styles.rowInner}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Image source={images.search} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search for restaurants, dishes... "
                        style={styles.searchInput}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: getCommonPaddingHorizontal(),
        paddingBottom: getSizeFromHeight(24)
    },
    name: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: getSizeFromHeight(5)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    downIcon: {
        marginLeft: 8
    },
    searchRow: {
        paddingHorizontal: getCommonPaddingHorizontal()
    },
    searchIcon: {
        position: 'absolute',
        left: getSizeFromWidth(10),
        top: 0,
        bottom: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        zIndex: 0,
        paddingHorizontal: getSizeFromWidth(46),
        paddingVertical: getSizeFromHeight(11),
        borderColor: COLORS.GREY,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLORS.GREY_LIGHTER,
        color: COLORS.GREY02
    },
    rowInner: {}
});

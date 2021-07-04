import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { images } from '../../../assets/images';
import { COLORS } from '../../../ultilities/constant';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';
import Item from './Item';
export default function CarouselPromotion() {
    const data = [
        {
            image: images.promotion
        },
        {
            image: images.promotion
        },
        {
            image: images.promotion
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={styles.wrapSlide}>
            <Carousel
                renderItem={({ item, index }) => (
                    <Item
                        data={item}
                        index={index}
                        height={getSizeFromWidth(122)}
                    />
                )}
                itemWidth={getSizeFromWidth(327 + 24)}
                itemHeight={getSizeFromHeight(122)}
                sliderWidth={DEVICE_WIDTH}
                data={data}
                activeSlideAlignment="start"
                inactiveSlideOpacity={0.7}
                inactiveSlideScale={1}
                onSnapToItem={index => setActiveSlide(index)}
                autoplay
                loop
            />
            <Pagination
                containerStyle={styles.paginationContainer}
                dotsLength={data.length}
                activeDotIndex={activeSlide}
                renderDots={(activeIndex, total, context) =>
                    data.map((i, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={
                                    activeIndex === index
                                        ? styles.dotActive
                                        : styles.dot
                                }></TouchableOpacity>
                        );
                    })
                }
            />
        </View>
    );
}

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapSlide: {
        marginBottom: getSizeFromHeight(30)
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 6,
        height: 6,
        backgroundColor: COLORS.GREY_DARKER,
        borderRadius: 25,
        marginHorizontal: getSizeFromWidth(1)
    },
    dotActive: {
        width: 22,
        height: 6,
        backgroundColor: COLORS.ORANGE,
        borderRadius: 25,
        marginHorizontal: getSizeFromWidth(1)
    },
    paginationContainer: {
        paddingBottom: 0,
        paddingTop: getSizeFromHeight(12)
    }
});

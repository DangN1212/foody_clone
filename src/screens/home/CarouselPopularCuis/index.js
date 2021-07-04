import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { images } from '../../../assets/images';
import { textStyles } from '../../../components/styles/text';
import { COLORS } from '../../../ultilities/constant';
import {
    getCommonPaddingHorizontal,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';
import Item from './item';

export default function CarouselPopularCuis() {
    const data = [
        {
            image: images.New_Zealand,
            title: 'New Zealander'
        },
        {
            image: images.Italian,
            title: 'Italian'
        },
        {
            image: images.Greece,
            title: 'Greece'
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <View style={styles.wrapSlide}>
            <View style={textStyles.carouselWrapTitle}>
                <Text style={textStyles.carouselTitle}>Poppular Cuisines</Text>
                <Text style={textStyles.carouselViewAll}>View all</Text>
            </View>
            <Carousel
                renderItem={({ item, index }) => (
                    <Item data={item} index={index} />
                )}
                itemWidth={getSizeFromWidth(113 + 24)}
                sliderWidth={DEVICE_WIDTH}
                data={data}
                activeSlideAlignment="start"
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                autoplay
                loop
            />
        </View>
    );
}

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapSlide: {
        marginBottom: getSizeFromHeight(30)
    }
});

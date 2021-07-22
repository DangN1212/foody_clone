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

export default function CarouselPopular({ data = [] }) {
    const data1 = [
        {
            image: images.popular,
            title: 'Creamos - Chapel Ln',
            text: 'Chapel Ln, Harriseahead',
            time: '18 mins',
            range: '3 km',
            star: '5.0'
        },
        {
            image: images.popular,
            title: 'Creamos - Chapel Ln',
            text: 'Chapel Ln, Harriseahead',
            time: '18 mins',
            range: '3 km',
            star: '5.0'
        },
        {
            image: images.popular,
            title: 'Creamos - Chapel Ln',
            text: 'Chapel Ln, Harriseahead',
            time: '18 mins',
            range: '3 km',
            star: '5.0'
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <View style={styles.wrapSlide}>
            <View style={textStyles.carouselWrapTitle}>
                <Text style={textStyles.carouselTitle}>Popular Eatries</Text>
                <Text style={textStyles.carouselViewAll}>View all</Text>
            </View>
            <Carousel
                renderItem={({ item, index }) => (
                    <Item
                        data={{ ...item, image: images.popular }}
                        index={index}
                        height={getSizeFromWidth(122)}
                    />
                )}
                itemWidth={getSizeFromWidth(241 + 24)}
                itemHeight={getSizeFromHeight(190)}
                sliderWidth={DEVICE_WIDTH}
                data={data}
                activeSlideAlignment="start"
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                onSnapToItem={index => setActiveSlide(index)}
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

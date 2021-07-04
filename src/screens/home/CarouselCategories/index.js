import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { images } from '../../../assets/images';
import { textStyles } from '../../../components/styles/text';
import Carousel from 'react-native-snap-carousel';
import {
    DEVICE_WIDTH,
    getSizeFromHeight,
    getSizeFromWidth
} from '../../../ultilities/responsive';
import ItemCategories from './Item';

export default function CarouselCategories() {
    const data = [
        {
            text: 'Promos',
            image: images.promos
        },
        {
            text: 'Meal',
            image: images.meal
        },
        {
            text: 'Drink',
            image: images.drink
        },
        {
            text: 'FastFood',
            image: images.fastfood
        },
        {
            text: 'Snack',
            image: images.snack
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <View style={styles.wrapSlide}>
            <View style={textStyles.carouselWrapTitle}>
                <Text style={textStyles.carouselTitle}>Popular Eatries</Text>
            </View>
            <ScrollView horizontal>
                {data.map((item, index) => (
                    <ItemCategories data={item} key={index} />
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapSlide: {
        marginBottom: getSizeFromHeight(30)
    }
});

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
import { useSelector } from 'react-redux';

export default function CarouselCategories() {
    const categories = useSelector(state => state.categories);

    const data = [
        {
            image: images.promos
        },
        {
            image: images.meal
        },
        {
            image: images.drink
        },
        {
            image: images.fastfood
        },
        {
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
                {categories.list.map((item, index) => {
                    return (
                        <ItemCategories
                            data={{ name: item.name, image: data[index].image }}
                            key={item.id}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    wrapSlide: {
        marginBottom: getSizeFromHeight(30)
    }
});

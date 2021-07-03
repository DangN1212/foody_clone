import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DESIGN = {
    WIDTH: 375,
    HEIGHT: 812
};

export const getSizeFromWidth = size => {
    return (width * size) / DESIGN.WIDTH;
};

export const getSizeFromHeight = size => {
    return (height * size) / DESIGN.HEIGHT;
};
export const getCommonPaddingHorizontal = (size = 24) => {
    return getSizeFromWidth(size);
};

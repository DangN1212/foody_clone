import { Dimensions } from 'react-native';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } =
    Dimensions.get('window');

const DESIGN = {
    WIDTH: 375,
    HEIGHT: 812
};

export const getSizeFromWidth = size => {
    return (DEVICE_WIDTH * size) / DESIGN.WIDTH;
};

export const getSizeFromHeight = size => {
    return (DEVICE_HEIGHT * size) / DESIGN.HEIGHT;
};
export const getCommonPaddingHorizontal = (size = 24) => {
    return getSizeFromWidth(size);
};

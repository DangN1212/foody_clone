import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const breakpointTime = new Date().getTime();
const duration = 4 * 60 * 1000;

const TIME_INTERVAL = 1000;

const getFirstMinute = (time = 0) => {
    const numberSpit = new Date(time).getMinutes().toString().split('');
    let secondDigit = 0;

    if (numberSpit[1]) {
        secondDigit = numberSpit[0];
    }

    return Number(secondDigit) + 1;
};

const getSecondMinute = (time = 0) => {
    const numberSpit = new Date(time).getMinutes().toString().split('');
    let secondDigit = numberSpit[0];

    if (numberSpit[1]) {
        secondDigit = numberSpit[1];
    }
    return Number(secondDigit) + 1;
};

const getFirstDigitSecond = (time = 0) => {
    const numberSpit = new Date(time).getSeconds().toString().split('');
    let secondDigit = 0;

    if (numberSpit[1]) {
        secondDigit = numberSpit[0];
    }

    return Number(secondDigit) + 1;
};

const getSecondDigitSecond = (time = 0) => {
    const numberSpit = new Date(time).getSeconds().toString().split('');
    let secondDigit = numberSpit[0];

    if (numberSpit[1]) {
        secondDigit = numberSpit[1];
    }
    return Number(secondDigit) + 1;
};

export default function CountDown() {
    const animatedRefFirstSecond = useRef(new Animated.Value(-35)).current;
    const animatedRefLastSecond = useRef(new Animated.Value(-35)).current;

    const animatedRefLastMinute = useRef(new Animated.Value(-35)).current;
    const animatedRefFirstMinute = useRef(new Animated.Value(-35)).current;

    // const [second, setSecond] = useState(0);
    const inset = useSafeAreaInsets();

    useEffect(() => {
        setInterval(function () {
            countdown();
        }, TIME_INTERVAL);
    }, []);

    const countdown = () => {
        let a = new Date().getTime();
        const millisecond = a - breakpointTime;
        // a.setMilliseconds(breakpointTime);
        const newTime = new Date().setTime(millisecond);

        let newOffsetFirstMinute = getFirstMinute(newTime);
        let newOffsetLastMinute = getSecondMinute(newTime);
        let newOffset = getFirstDigitSecond(newTime);
        let newOffsetLastSecond = getSecondDigitSecond(newTime);

        Animated.timing(animatedRefFirstMinute, {
            toValue: Number(newOffsetFirstMinute) * -35,
            delay: TIME_INTERVAL / 2,
            duration: TIME_INTERVAL / 2,
            useNativeDriver: false
        }).start(() => {
            if (
                newOffsetFirstMinute === 6 &&
                newOffset === 6 &&
                newOffsetLastMinute == 10 &&
                newOffsetLastSecond == 10
            ) {
                animatedRefFirstMinute.setValue(0);
            }
        });

        Animated.timing(animatedRefLastMinute, {
            toValue: Number(newOffsetLastMinute) * -35,
            delay: TIME_INTERVAL / 2,
            duration: TIME_INTERVAL / 2,
            useNativeDriver: false
        }).start(() => {
            if (
                newOffset === 6 &&
                newOffsetLastMinute == 10 &&
                newOffsetLastSecond == 10
            ) {
                animatedRefLastMinute.setValue(0);
            }
        });

        Animated.timing(animatedRefLastSecond, {
            toValue: Number(newOffsetLastSecond) * -35,
            delay: TIME_INTERVAL / 2,
            duration: TIME_INTERVAL / 2,
            useNativeDriver: false
        }).start(() => {
            if (newOffsetLastSecond == 10) {
                animatedRefLastSecond.setValue(0);
            }
        });

        Animated.timing(animatedRefFirstSecond, {
            toValue: newOffset * -35,
            delay: TIME_INTERVAL / 2,
            duration: TIME_INTERVAL / 2,
            useNativeDriver: false
        }).start(() => {
            if (newOffset === 6 && newOffsetLastSecond == 10) {
                animatedRefFirstSecond.setValue(0);
            }
        });
    };

    return (
        <View style={{ marginTop: inset.top, flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.wrapCol}>
                    <Animated.ScrollView
                        style={[styles.col, { top: animatedRefFirstMinute }]}>
                        <Text style={styles.item}>0</Text>
                        <Text style={styles.item}>5</Text>
                        <Text style={styles.item}>4</Text>
                        <Text style={styles.item}>3</Text>
                        <Text style={styles.item}>2</Text>
                        <Text style={styles.item}>1</Text>
                        <Text style={styles.item}>0</Text>
                    </Animated.ScrollView>
                </View>
                <View style={styles.wrapCol}>
                    <Animated.ScrollView
                        style={[styles.col, { top: animatedRefLastMinute }]}>
                        <Text style={styles.item}>0</Text>
                        <Text style={styles.item}>9</Text>
                        <Text style={styles.item}>8</Text>
                        <Text style={styles.item}>7</Text>
                        <Text style={styles.item}>6</Text>
                        <Text style={styles.item}>5</Text>
                        <Text style={styles.item}>4</Text>
                        <Text style={styles.item}>3</Text>
                        <Text style={styles.item}>2</Text>
                        <Text style={styles.item}>1</Text>
                        <Text style={styles.item}>0</Text>
                    </Animated.ScrollView>
                </View>
                <Text>:</Text>
                <View style={styles.wrapCol}>
                    <Animated.ScrollView
                        style={[styles.col, { top: animatedRefFirstSecond }]}>
                        <Text style={styles.item}>0</Text>
                        <Text style={styles.item}>5</Text>
                        <Text style={styles.item}>4</Text>
                        <Text style={styles.item}>3</Text>
                        <Text style={styles.item}>2</Text>
                        <Text style={styles.item}>1</Text>
                        <Text style={styles.item}>0</Text>
                    </Animated.ScrollView>
                </View>
                <View style={styles.wrapCol}>
                    <Animated.ScrollView
                        style={[styles.col, { top: animatedRefLastSecond }]}>
                        <Text style={styles.item}>0</Text>
                        <Text style={styles.item}>9</Text>
                        <Text style={styles.item}>8</Text>
                        <Text style={styles.item}>7</Text>
                        <Text style={styles.item}>6</Text>
                        <Text style={styles.item}>5</Text>
                        <Text style={styles.item}>4</Text>
                        <Text style={styles.item}>3</Text>
                        <Text style={styles.item}>2</Text>
                        <Text style={styles.item}>1</Text>
                        <Text style={styles.item}>0</Text>
                    </Animated.ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapCol: {
        backgroundColor: 'black',
        width: 30,
        height: 35,
        overflow: 'hidden'
    },
    col: {
        position: 'absolute',
        left: 0,
        overflow: 'hidden',
        textAlign: 'center'
    },
    item: {
        height: 35,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 30
    }
});

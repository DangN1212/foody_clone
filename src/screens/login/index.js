import React from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.text}>
                Don't have an account?{' '}
                <Text style={styles.colorOrgange}>Sign up now!</Text>
            </Text>
            <TextInput
                style={inputStyles.input}
                placeholder="Email or Phone Number"
            />
            <TextInput
                style={inputStyles.input}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Text style={styles.text02}>Forgot Password</Text>
            <TouchableOpacity
                style={{
                    ...buttonStyles.buttonSignIn,
                    ...buttonStyles.buttonCommon
                }}>
                <Text style={buttonStyles.text}>sign in</Text>
            </TouchableOpacity>
            <Text style={{ marginVertical: getSizeFromHeight(24) }}>OR</Text>
            <TouchableOpacity
                style={{
                    ...buttonStyles.buttonCommon,
                    ...buttonStyles.buttonFb,
                    marginBottom: getSizeFromHeight(16)
                }}>
                <Text style={buttonStyles.text}>countinue with facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    ...buttonStyles.buttonCommon,
                    ...buttonStyles.buttonGg
                }}>
                <Text style={buttonStyles.text}>countinue with google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '600'
    },
    text: {
        marginTop: getSizeFromHeight(16),
        marginBottom: getSizeFromHeight(32)
    },
    colorOrgange: {
        color: '#FB6D3B'
    },
    text02: {
        marginBottom: getSizeFromHeight(24)
    }
});

const inputStyles = StyleSheet.create({
    input: {
        borderColor: '#DBDFE3',
        borderWidth: 1,
        borderRadius: 5,
        width: getSizeFromWidth(327),
        height: getSizeFromHeight(50),
        padding: 10,
        marginBottom: getSizeFromHeight(16)
    }
});

const buttonStyles = StyleSheet.create({
    buttonCommon: {
        width: getSizeFromWidth(327),
        height: getSizeFromHeight(46),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonSignIn: {
        backgroundColor: '#FB6D3B'
    },
    buttonFb: {
        backgroundColor: '#4460A0'
    },
    buttonGg: {
        backgroundColor: '#4285F4'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
});

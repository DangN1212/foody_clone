import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { images } from '../../assets/images';
import KeyboardAvoidWrapper from '../../components/Keyboardavoidingwrapper';
import { buttonStyles } from '../../components/styles/button';
import { flexContainer } from '../../components/styles/flexContainer';
import { inputStyles } from '../../components/styles/input';
import { textStyles } from '../../components/styles/text';
import { ROUTES } from '../../ultilities/constant';
import { getSizeFromHeight } from '../../ultilities/responsive';
export default function index({ navigation }) {
    const handleNavigateToSignIn = params => {
        navigation.navigate(ROUTES.LOGIN);
    };

    return (
        <KeyboardAvoidWrapper>
            <View
                style={{
                    ...flexContainer.container,
                    ...flexContainer.wrapper
                }}>
                <Text style={textStyles.title}>Sign up</Text>
                <Text style={textStyles.text}>
                    Enter your email and password for sign up, or{' '}
                    <Text
                        style={textStyles.colorOrgange}
                        onPress={handleNavigateToSignIn}>
                        Already have account!
                    </Text>
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
                <TextInput
                    style={inputStyles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={{
                        ...buttonStyles.buttonSignIn,
                        ...buttonStyles.buttonCommon
                    }}>
                    <Text style={buttonStyles.text}>sign up</Text>
                </TouchableOpacity>
                <Text style={{ ...textStyles.text, textAlign: 'center' }}>
                    By signing up you agree to our{' '}
                    <Text style={textStyles.colorOrgange}>Terms condition</Text>{' '}
                    &{' '}
                    <Text style={textStyles.colorOrgange}>Privacy policy</Text>
                </Text>
                <Text style={{ marginBottom: getSizeFromHeight(32) }}>OR</Text>
                <TouchableOpacity
                    style={{
                        ...buttonStyles.buttonCommon,
                        ...buttonStyles.buttonFb,
                        marginBottom: getSizeFromHeight(16)
                    }}>
                    <View style={buttonStyles.squareIcon}>
                        <Image source={images.facebook} />
                    </View>
                    <Text style={buttonStyles.text}>
                        countinue with facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...buttonStyles.buttonCommon,
                        ...buttonStyles.buttonGg
                    }}>
                    <View style={buttonStyles.squareIcon}>
                        <Image source={images.goggle} />
                    </View>
                    <Text style={buttonStyles.text}>countinue with google</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidWrapper>
    );
}

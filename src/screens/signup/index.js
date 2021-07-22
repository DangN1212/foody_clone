import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { images } from '../../assets/images';
import KeyboardAvoidWrapper from '../../components/Keyboardavoidingwrapper';
import { buttonStyles } from '../../components/styles/button';
import { flexContainer } from '../../components/styles/flexContainer';
import { inputStyles } from '../../components/styles/input';
import { textStyles } from '../../components/styles/text';
import { API_CODE, API_METHOD, API_URL } from '../../network/constant';
import { callRequest } from '../../network/request';
import { ROUTES } from '../../ultilities/constant';
import { getSizeFromHeight } from '../../ultilities/responsive';
export default function index() {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNavigateToSignIn = params => {
        navigation.navigate(ROUTES.LOGIN);
    };

    const handleSignUp = async () => {
        if (!email) {
            Alert.alert('Error', 'Please check email', [
                {
                    text: 'OK'
                }
            ]);
            return false;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Please check password', [
                {
                    text: 'OK'
                }
            ]);
            return false;
        }

        const res = await callRequest(API_URL.SIGN_UP, API_METHOD.POST, {
            email: email,
            password: password
        });

        if (res.status === API_CODE.SUCCESS) {
            Alert.alert('Success', 'Please login', [
                {
                    text: 'OK',
                    onPress: () => navigation.replace(ROUTES.LOGIN)
                }
            ]);
        }
    };

    return (
        <KeyboardAvoidWrapper>
            <View style={[flexContainer.container, flexContainer.wrapper]}>
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
                    onChangeText={e => setEmail(e)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={inputStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={e => setPassword(e)}
                />
                <TextInput
                    style={inputStyles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={e => setConfirmPassword(e)}
                />
                <TouchableOpacity
                    style={[
                        buttonStyles.buttonSignIn,
                        buttonStyles.buttonCommon
                    ]}
                    onPress={handleSignUp}>
                    <Text style={buttonStyles.text}>sign up</Text>
                </TouchableOpacity>
                <Text style={[textStyles.text, { textAlign: 'center' }]}>
                    By signing up you agree to our{' '}
                    <Text style={textStyles.colorOrgange}>Terms condition</Text>{' '}
                    &{' '}
                    <Text style={textStyles.colorOrgange}>Privacy policy</Text>
                </Text>
                <Text style={{ marginBottom: getSizeFromHeight(32) }}>OR</Text>
                <TouchableOpacity
                    style={[
                        buttonStyles.buttonCommon,
                        buttonStyles.buttonFb,
                        {
                            marginBottom: getSizeFromHeight(16)
                        }
                    ]}>
                    <View style={buttonStyles.squareIcon}>
                        <Image source={images.facebook} />
                    </View>
                    <Text style={buttonStyles.text}>
                        countinue with facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyles.buttonCommon, buttonStyles.buttonGg]}>
                    <View style={buttonStyles.squareIcon}>
                        <Image source={images.goggle} />
                    </View>
                    <Text style={buttonStyles.text}>countinue with google</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidWrapper>
    );
}

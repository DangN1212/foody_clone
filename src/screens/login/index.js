import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {
    getSizeFromHeight,
    getSizeFromWidth
} from '../../ultilities/responsive';
import KeyboardAvoidWrapper from '../../components/Keyboardavoidingwrapper';
import { buttonStyles } from '../../components/styles/button';
import { images } from '../../assets/images';
import { flexContainer } from '../../components/styles/flexContainer';
import { textStyles } from '../../components/styles/text';
import { inputStyles } from '../../components/styles/input';
import { ROUTES } from '../../ultilities/constant';
import { asyncSigIn } from '../../redux/action/Auth';
import { useDispatch } from 'react-redux';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const handleNavigateToSignIn = () => {
        navigation.navigate(ROUTES.SIGNUP);
    };

    const handleSignIn = async () => {
        console.log(
            dispatch(await asyncSigIn({ email: email, password: pass }))
        );
    };

    const onLogin = async => {};

    return (
        <KeyboardAvoidWrapper>
            <View style={flexContainer.container}>
                <Text style={textStyles.title}>Sign in</Text>
                <Text style={textStyles.text}>
                    Don't have an account?{' '}
                    <Text
                        style={textStyles.colorOrgange}
                        onPress={handleNavigateToSignIn}>
                        Sign up now!
                    </Text>
                </Text>
                <TextInput
                    value={email}
                    onChangeText={e => setEmail(e)}
                    style={inputStyles.input}
                    placeholder="Email or Phone Number"
                />
                <TextInput
                    value={pass}
                    onChangeText={e => setPass(e)}
                    style={inputStyles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Text style={textStyles.text02}>Forgot Password</Text>
                <TouchableOpacity
                    style={{
                        ...buttonStyles.buttonSignIn,
                        ...buttonStyles.buttonCommon
                    }}
                    onPress={handleSignIn}>
                    <Text style={buttonStyles.text}>sign in</Text>
                </TouchableOpacity>
                <Text style={{ marginVertical: getSizeFromHeight(24) }}>
                    OR
                </Text>
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

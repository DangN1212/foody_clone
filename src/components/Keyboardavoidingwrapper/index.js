import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

const KeyboardAvoidWrapper = ({ children }) => {
    const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={behavior}>
            <ScrollView
                style={{ flex: 1 }}
                bounces={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidWrapper;

const styles = StyleSheet.create({});

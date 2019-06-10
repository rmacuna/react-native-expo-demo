import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, View, Platform } from 'react-native'


const CustomInput = (props) => {
    return (

        <View style={[styles.container, { marginBottom : props.separation} ]}>
            <Text style={ Platform.OS === "ios" ? styles.label_IOS : styles.label_ANDROID }>{props.label}</Text>
            <TextInput
                {...props}
                style={
                    Platform.OS === "ios" ? 
                    [styles.input_IOS, props.style] : 
                    [styles.input_ANDROID, props.style] 
                }>
            </TextInput>
            <View style={styles.lineInput}></View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    label_IOS: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
        color: '#323031',
        marginBottom: -20 // Deberia interpolar de -20 a 5
    },
    label_ANDROID: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
        color: '#323031',
        marginBottom: -25, // Deberia interpolar de -25 a 0 
    },
    lineInput: {
        width: '100%',
        height: 2,
        backgroundColor: '#323031'
    },
    input_IOS: {
        width: '100%',
        zIndex: 1,
        paddingBottom: 6,
        fontFamily: 'GorditaMedium'
    },
    input_ANDROID: {
        width: '100%',
        zIndex: 1,
        paddingBottom: '1%',
        fontFamily: 'GorditaMedium'
    }
})

export default CustomInput;


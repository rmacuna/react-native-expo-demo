import React, { Component } from 'react'
import { View } from 'react-native'
import CustomInput from '../../UI/CustomInput/CustomInput';
import styles from './LoginForm.styles';

const LoginForm = (props) => {
    return (
        <View style={styles.inputWrapper}>
            <CustomInput
                label="Correo electrónico"
                separation={50}
                autoCompleteType="email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={props.emailValue}
                onChangeText={props.onEmailChange}
                />
            <CustomInput
                label="Contraseña"
                autoCompleteType="password"
                secureTextEntry={true}
                autoCorrect={false}
                value={props.passwordValue}
                onChangeText={props.onPasswordChange}
             />
        </View>
    )
}

export default LoginForm

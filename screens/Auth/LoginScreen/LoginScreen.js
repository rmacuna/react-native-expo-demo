import React, { Component } from 'react';
import { View, Text, Image, Platform, TouchableOpacity } from 'react-native';
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import PillButton from '../../../components/UI/Pillbutton/Pillbutton';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './LoginScreen.styles';


class LoginScreen extends Component {
    state = {
        controls: {
            username: {
                valid: false,
                value: "",
                validationRules: {
                    isEmail: false
                }
            },
            password: {
                valid: false,
                value: "",
                validationRules: {
                    minLength: 6
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBackgroundYellow}>
                    <View style={styles.BrandTitleWrapper}>
                        <Text style={styles.BrandTitle}>Pilldate</Text>
                    </View>
                    <View style={styles.PillImageWrapper}>
                        <Image style={styles.pillImage} source={require('./../../../assets/images/PillCircle.png')} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <CustomInput
                            label="Correo electrónico"
                            separation={50}
                            autoCompleteType="email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onTextChange={this.state.controls.username.value}
                            style={styles.inputCorreo} />
                        <CustomInput
                            label="Contraseña"
                            autoCompleteType="password"
                            secureTextEntry={true}
                            autoCorrect={false}
                            onTextChange={this.state.controls.username.value} />
                    </View>
                    <View style={styles.buttonMiddleWrapper} >
                        <PillButton
                            backgroundColor="#fff">
                            Ingresar
                        </PillButton>
                    </View>

                    <View style={styles.bottomFotterWrapper}>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={
                                    () => this.props.navigation.navigate('Register')
                                }>
                                <Text style={[styles.footerAction, { padding: 20 }]}>Crear una cuenta</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineSeparador}></View>
                        <View style={[styles.item, Platform.OS === 'android' ? { marginLeft: 20 } : null]}>
                            <TouchableOpacity>
                                <Text style={styles.footerAction}>Olvide la contraseña</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <FontAwesome5.Button
                        borderRadius={100}
                        name="facebook"
                        backgroundColor="#3b5998">
                        Login with Facebook
                        </FontAwesome5.Button>
                    {/* <Button title="Navigate" onPress={() => this.props.navigation.navigate('Register')} /> */}

                </View>

            </View>
        )
    }
}
export default LoginScreen;
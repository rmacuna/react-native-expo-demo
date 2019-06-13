import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import PillButton from '../../../components/UI/Pillbutton/Pillbutton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform } from '@unimodules/core';
import { FontAwesome5 } from '@expo/vector-icons';
// import Pills from './../../../assets/images/pills.png';
class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }
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
                        backgroundColor="#3b5998"
                        onPress={console.log('d')}>
                        Login with Facebook
                        </FontAwesome5.Button>
                    {/* <Button title="Navigate" onPress={() => this.props.navigation.navigate('Register')} /> */}

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    lineSeparador: {
        width: 2,
        height: '80%',
        backgroundColor: '#000'
    },
    BrandTitle: {
        fontSize: 36,
        fontFamily: 'GorditaBold',
        color: '#000',
    },
    bottomFotterWrapper: {
        width: '100%',
        height: '25%',
        marginLeft: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonMiddleWrapper: {
        paddingTop: 90,
        width: '100%',
    },
    pillImage: {
        width: 173,
        height: 173
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    PillImageWrapper: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    BrandTitleWrapper: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBackgroundYellow: {
        backgroundColor: '#FFC857',
        width: '100%',
        height: '70%',
        paddingTop: 32,
        paddingRight: 37,
        paddingLeft: 37,
        paddingBottom: 57
    },
    inputWrapper: {
        width: '100%',
    },
    textCustom: {
        fontFamily: 'GorditaMedium'
    },
    footerAction: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
    }
})

export default LoginScreen;
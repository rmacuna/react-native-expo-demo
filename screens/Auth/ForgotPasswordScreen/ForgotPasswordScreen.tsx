import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './ForgotPass.styles'
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import NavyButton from '../../../components/UI/NavyButton/NavyButton';
import { COLOR_PRIMARY } from '../../../constants/constants';
class ForgotPasswordScreen extends Component {


    state = {
        inputVerify: {
            value: "",
            isEmail: true,
        }
    }

    _onBackToAuth = () => {
        this.props.navigation.goBack();
    }
    _onSendCodeHandler = () => {
        alert('Sending Code..')
    }

    _inputChangeHandler = value => {
        this.setState({
            inputVerify: {
                ...this.state.inputVerify,
                value: value
            }
        })
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <View>
                            <Text style={styles.title}>
                                Recuperar Contraseña
                            </Text>
                        </View>
                        <Image
                            source={require('./../../../assets/images/padlock.png')}
                            style={styles.padlock}
                        />
                    </View>
                    <Text style={styles.description}>
                        Si tienes problemas para ingresar, ingresa tu correo electrónico y te enviaremos un código de verificación.
                    </Text>
                    <View style={styles.middleRow}>
                        <CustomInput
                            value={this.state.inputVerify.value}
                            onChangeText={this._inputChangeHandler.bind(this)}
                            autoCapitalize="none"
                            label="Correo electrónico" />
                    </View>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('./../../../assets/images/paper-plane.png')} />
                    </View>
                    <NavyButton
                        onPress={this._onSendCodeHandler}
                        disabled={!this.state.inputVerify.isEmail}
                        underlayColor="#E8B54E"
                        backgroundColor={COLOR_PRIMARY} >Enviar código de verificación</NavyButton>

                    <View style={{width: '100%', paddingTop: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={this._onBackToAuth}>
                            <Text style={styles.buttonBack}>Volver a iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Image
                    style={styles.imageBackground}
                    source={require('./../../../assets/images/passForgotBackground.png')} />
            </SafeAreaView>
        )
    }
}

export default ForgotPasswordScreen

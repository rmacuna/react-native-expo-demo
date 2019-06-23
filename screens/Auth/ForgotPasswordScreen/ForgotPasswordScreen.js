import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView,Keyboard } from 'react-native'
import styles from './ForgotPass.styles'
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
class ForgotPasswordScreen extends Component {
    render() {
        return(
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
                   <CustomInput label="Correo electrónico" />

                </View>
                <Image 
                    style={styles.imageBackground}
                    source={require('./../../../assets/images/passForgotBackground.png')} />
            </SafeAreaView>
        )
    }
}

export default ForgotPasswordScreen

import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './LoginHeader.styles';
const LoginHeader = () => {
    return (
        <View>
            <View style={styles.BrandTitleWrapper}>
                <Text style={styles.BrandTitle}>Pilldate</Text>
            </View>
            <View style={styles.PillImageWrapper}>
                <Image style={styles.pillImage} source={require('./../../../assets/images/PillCircle.png')} />
            </View>
        </View>
    )
}



export default LoginHeader

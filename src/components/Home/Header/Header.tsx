import React from 'react'
import { View, Text, Image } from 'react-native'
import NavyButton from '../../UI/NavyButton/NavyButton';
import styles from './Header.style';

const Header = (props) => {


    return (
        <View>
            <View style={styles.horizontalWrapper}>
                <View>
                    <Text style={styles.title}> Inicio </Text>
                    <Text style={styles.subtitle}>Jhon Doe</Text>
                    <Text style={styles.date}>Dom 06.06.2019</Text>
                </View>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={require('./../../../assets/images/reminder.png')}
                />
            </View>

            <View style={styles.buttonWrapper}>
                <NavyButton onPress={props.onNextPillPress}>Proxima pastilla</NavyButton>
                <Text style={styles.hint}>Presiona el boton para buscar la pastilla más proxima a tomar.</Text>
            </View>
        </View>
    )
}

export default Header

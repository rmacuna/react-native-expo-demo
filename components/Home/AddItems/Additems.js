import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Additems.style';

const Additems = (props) => {
    return (
        <View style={styles.horizontalWrapper}>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.cardCircle}>
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={require('./../../../assets/images/pills.png')}
                    />
                </View>
                <Text style={styles.hint}>Pastilla</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.cardCircle}>
                    <Image
                        source={require('./../../../assets/images/weekly-calendar.png')}
                        style={{ width: 35, height: 35 }}
                    />
                </View>
                <Text style={styles.hint}>Cita</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.cardCircle}>
                    <Image
                        source={require('./../../../assets/images/folder.png')}
                        style={{ width: 35, height: 35 }}
                    />
                </View>
                <Text style={styles.hint}>Categoria</Text>
            </View>
        </View>
    )
}

export default Additems

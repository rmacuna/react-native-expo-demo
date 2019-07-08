import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './Additems.style';

const Additems = (props) => {
    return (
        <View style={styles.horizontalWrapper}>
            <TouchableWithoutFeedback onPress={props.onPressPill} style={{ alignItems: 'center' }}>
                <View>
                    <View style={styles.cardCircle}>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('./../../../assets/images/pills.png')}
                        />
                    </View>
                    <Text style={styles.hint}>Pastilla</Text>
                </View>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={props.onPressDate} style={{ alignItems: 'center' }}>
                <View>
                    <View style={styles.cardCircle}>
                        <Image
                            source={require('./../../../assets/images/weekly-calendar.png')}
                            style={{ width: 35, height: 35 }}
                        />
                    </View>
                    <Text style={styles.hint}>Cita</Text>
                </View>

            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={props.onPressCat} style={{ alignItems: 'center' }}>
                <View>
                    <View style={styles.cardCircle}>
                        <Image
                            source={require('./../../../assets/images/folder.png')}
                            style={{ width: 35, height: 35 }}
                        />
                    </View>
                    <Text style={styles.hint}>Categoria</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Additems

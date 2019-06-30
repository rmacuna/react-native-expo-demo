import React from 'react'
import { View, Text } from 'react-native'
import SquareInput from './../../../UI/SquareInput/SquareInput'
import NavyButton from './../../../UI/NavyButton/NavyButton'
import styles from './../ModalAction.styles'
import { COLOR_SECONDARY, COLOR_EMPHASIS } from './../../../../constants/constants'

const FormDate = (props) => {
    return (
        <View>
            <SquareInput
                onChangeText={props.dateNameChange}
                value={props.dateName}
                placeholder="Nombre de la cita"
                icon={false}
            />
            <SquareInput
                onChangeText={props.dateReasonChange}
                value={props.dateReason}
                placeholder="Motivo de la cita"
                icon={false}
            />
            <Text style={styles.subtitle}>Ajustar fecha y hora</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .7 }}>
                    <NavyButton
                        onPress={props.showDatePicker}
                        style={{ borderRadius: 6, marginRight: 5 }}
                        color="#fff"
                        backgroundColor={COLOR_SECONDARY}>Fecha</NavyButton>
                </View>
                <View style={styles.center}>
                    <Text>{props.startDate}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .7 }}>
                    <NavyButton
                        onPress={props.showHourPicker}
                        style={{ borderRadius: 6, marginRight: 5 }}
                        color="#fff"
                        backgroundColor={COLOR_EMPHASIS}>Hora</NavyButton>
                </View>
                <View style={styles.center}>
                    <Text>{props.startHour}</Text>
                </View>
            </View>
        </View>
    )

}

export default FormDate

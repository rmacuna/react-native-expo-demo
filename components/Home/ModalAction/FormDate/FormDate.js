import React from 'react'
import { View, Text } from 'react-native'
import SquareInput from './../../../UI/SquareInput/SquareInput'
import NavyButton from './../../../UI/NavyButton/NavyButton'
import styles from './../ModalAction.styles'

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
        </View>
    )

}

export default FormDate

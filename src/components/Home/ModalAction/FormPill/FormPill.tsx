import React from 'react'
import { View, Text } from 'react-native'
import {
    COLOR_SECONDARY,
    COLOR_PRIMARY,
    COLOR_EMPHASIS
} from '../../../../constants/constants'
import SquareInput from '../../../UI/SquareInput/SquareInput'
import NavyButton from  '../../../UI/NavyButton/NavyButton'
import styles from '../ModalAction.styles'

const FormPill = (props) => {
    return (
        <View>
            <SquareInput
                onChangeText={props.pillNameChange}
                value={props.pillName}
                placeholder="Nombre"
                icon={false}
            />
            <SquareInput
                onChangeText={props.pillQuantityChange}
                value={props.pillQuantity}
                placeholder="Cantidad"
                icon={false}
            />
            <Text style={styles.hint}>
                Ingresa palabras que identifiquen el dato a agregar, cosas con las que puedas relacionarlas.
                                    </Text>
            <SquareInput
                onChangeText={props.keywordsChange}
                value={props.keywords}
                placeholder="Palabras clave"
                icon={false}
            />
            <Text style={styles.subtitle}>Frecuencia</Text>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .7 }}>
                    <NavyButton
                        onPress={props.showStartDatePicker}
                        style={{ borderRadius: 6, marginRight: 5 }}
                        color="#fff"
                        backgroundColor={COLOR_SECONDARY}>Fecha Inicio</NavyButton>
                </View>
                <View style={styles.center}>
                    <Text>{props.initialDate}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: .7 }}>
                    <NavyButton
                        onPress={props.showEndDatePicker}
                        style={{ borderRadius: 6, marginRight: 5 }}
                        color="#fff"
                        backgroundColor={COLOR_EMPHASIS}>Fecha Fin</NavyButton>
                </View>
                <View style={styles.center}>
                    <Text>{props.finalDate}</Text>
                </View>
            </View>
            <Text style={styles.hint}>
                Ingresa cada cuantas horas quieres que te recuerde el medicamento
                                    </Text>
            <SquareInput
                onChangeText={props.hoursFrequencyChange}
                value={props.hoursFrequency}
                placeholder="Frecuencia en horas"
                icon={false}
            />
            <Text style={styles.subtitle}>Multimedia</Text>
            <NavyButton backgroundColor={COLOR_PRIMARY}>Cargar Imagen</NavyButton>
        </View>
    )
}

export default FormPill

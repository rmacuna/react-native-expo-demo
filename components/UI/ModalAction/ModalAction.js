import React, { useState } from 'react'
import {
    View,
    Text,
    Modal,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native'
import {
    STATUSBAR_PRIMARY_COLOR,
    COLOR_SECONDARY,
    COLOR_EMPHASIS
} from '../../../constants/constants';

import SquareInput from './../SquareInput/SquareInput';
import CustomInput from './../CustomInput/CustomInput'
import NavyButton from '../NavyButton/NavyButton';
import DateTimePicker from "react-native-modal-datetime-picker";

import styles from './ModalAction.styles';



const ModalAction = (props) => {

    let modalContent = null;

    const [date, useDate] = useState({
        isDateTimePickerVisible: false
    });


    // Usar el datetime picker
    _showDateTimePicker = () => {
        useState({ isDateTimePickerVisible: true });
    };

    // Esconder el datetime picker
    _hideDateTimePicker = () => {
        useDate({ isDateTimePickerVisible: false });
    };

    _handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        _hideDateTimePicker()
    };

    switch (props.type) {
        case 0:
            modalContent = (
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
                                onPress={_showDateTimePicker}
                                style={{ borderRadius: 6, marginRight: 5 }}
                                color="#fff"
                                backgroundColor={COLOR_SECONDARY}>Fecha Inicio</NavyButton>
                        </View>
                        <View style={styles.center}>
                            <Text>Escoge una fecha inicial</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: .7 }}>
                            <NavyButton
                                style={{ borderRadius: 6, marginRight: 5 }}
                                color="#fff"
                                backgroundColor={COLOR_EMPHASIS}>Fecha Fin</NavyButton>
                        </View>
                        <View style={styles.center}>
                            <Text>Escoge una fecha final</Text>
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
                </View>
            )
            break;
        case 1:
            modalContent = (
                <Text>
                    Hola Yo añadire una cita
                </Text>
            )
            break;
        case 2:
            modalContent = (
                <Text>Hola yo añadire una categoria</Text>
            )
            break;
        default:
            return null
    }



    return (
        <Modal
            transparent={false}
            onRequestClose={props.onItemClosed}
            visible={props.active}
            animationType="slide">
            <StatusBar barStyle="dark-content" backgroundColor={STATUSBAR_PRIMARY_COLOR} />
            <SafeAreaView style={{ flex: 1, backgroundColor: STATUSBAR_PRIMARY_COLOR }}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeader_title}>{props.headerTitle}</Text>
                        </View>
                        <ScrollView>
                            {modalContent}
                        </ScrollView>

                    </View>
                </View>
            </SafeAreaView>
            <DateTimePicker
                isVisible={date.isDateTimePickerVisible}
                onConfirm={_handleDatePicked}
                onCancel={_hideDateTimePicker}
            />
        </Modal>
    )
}

export default ModalAction

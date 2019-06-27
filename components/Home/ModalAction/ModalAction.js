import React, { Component } from 'react'
import {
    View,
    Text,
    Modal,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {
    STATUSBAR_PRIMARY_COLOR,
    COLOR_SECONDARY,
    COLOR_EMPHASIS,
    COLOR_PRIMARY
} from './../../../constants/constants';

import { formatToReadableDate } from './../../../utils/date';
import SquareInput from './../../UI/SquareInput/SquareInput';
import NavyButton from './../../UI/NavyButton/NavyButton';
import DateTimePicker from "react-native-modal-datetime-picker";

import styles from './ModalAction.styles'



class ModalAction extends Component {


    state = {
        isDateTimePickerVisible: false,
        initialDate: 'Escoge una fecha inicial',
        finalDate: 'Escoge una fecha final',
        currentDateInput: null
    }


    // Usar el datetime picker
    _showDateTimePicker = (value) => {
        this.setState({
            isDateTimePickerVisible: true,
            currentDateInput: value
        });
    };

    // Esconder el datetime picker
    _hideDateTimePicker = () => {
        this.setState({
            isDateTimePickerVisible: false
        })
    };

    _handleDatePicked = (date) => {

        let readableDate = formatToReadableDate(date)

        if (this.state.currentDateInput === 0) {
            this.setState({
                initialDate: readableDate
            })
        } else if (this.state.currentDateInput === 1) {
            this.setState({
                finalDate: readableDate
            })
        }

        this._hideDateTimePicker()
    };



    render() {

        let modalContent = null;


        if (this.props.type === 0) {
            modalContent = (
                <View>
                    <SquareInput
                        onChangeText={this.props.pillNameChange}
                        value={this.props.pillName}
                        placeholder="Nombre"
                        icon={false}
                    />
                    <SquareInput
                        onChangeText={this.props.pillQuantityChange}
                        value={this.props.pillQuantity}
                        placeholder="Cantidad"
                        icon={false}
                    />
                    <Text style={styles.hint}>
                        Ingresa palabras que identifiquen el dato a agregar, cosas con las que puedas relacionarlas.
                                    </Text>
                    <SquareInput
                        onChangeText={this.props.keywordsChange}
                        value={this.props.keywords}
                        placeholder="Palabras clave"
                        icon={false}
                    />
                    <Text style={styles.subtitle}>Frecuencia</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: .7 }}>
                            <NavyButton
                                onPress={() => this._showDateTimePicker(0)}
                                style={{ borderRadius: 6, marginRight: 5 }}
                                color="#fff"
                                backgroundColor={COLOR_SECONDARY}>Fecha Inicio</NavyButton>
                        </View>
                        <View style={styles.center}>
                            <Text>{this.state.initialDate}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: .7 }}>
                            <NavyButton
                                onPress={() => this._showDateTimePicker(1)}
                                style={{ borderRadius: 6, marginRight: 5 }}
                                color="#fff"
                                backgroundColor={COLOR_EMPHASIS}>Fecha Fin</NavyButton>
                        </View>
                        <View style={styles.center}>
                            <Text>{this.state.finalDate}</Text>
                        </View>
                    </View>
                    <Text style={styles.hint}>
                        Ingresa cada cuantas horas quieres que te recuerde el medicamento
                                    </Text>
                    <SquareInput
                        onChangeText={this.props.hoursFrequencyChange}
                        value={this.props.hoursFrequency}
                        placeholder="Frecuencia en horas"
                        icon={false}
                    />
                    <Text style={styles.subtitle}>Multimedia</Text>
                    <NavyButton backgroundColor={COLOR_PRIMARY}>Cargar Imagen</NavyButton>


                </View>
            )
        }

        return (
            <Modal
                transparent={false}
                onRequestClose={this.props.onItemClosed}
                visible={this.props.active}
                animationType="slide">
                <StatusBar barStyle="dark-content" backgroundColor={STATUSBAR_PRIMARY_COLOR} />
                <SafeAreaView style={{ flex: 1, backgroundColor: STATUSBAR_PRIMARY_COLOR }}>
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalHeader_title}>{this.props.headerTitle}</Text>
                            </View>
                            <ScrollView>
                                {modalContent}
                                <View style={styles.separador}></View>
                                <View style={styles.row}>
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <Text style={styles.textButton}>Añadir</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flex: 1 }} onPress={this.props.modalClose}>
                                        <Text style={[styles.textButton, { color: COLOR_EMPHASIS }]}>Cerrar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </SafeAreaView>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </Modal>
        )
    }
}
export default ModalAction;

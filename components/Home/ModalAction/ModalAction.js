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
    COLOR_EMPHASIS,
} from './../../../constants/constants'

import { formatToReadableDate } from './../../../utils/date'
import DateTimePicker from "react-native-modal-datetime-picker"
import FormDate from './FormDate/FormDate'
import FormCategory from './FormCategory/FormCategory'
import FormPill from './FormPill/FormPill'
import styles from './ModalAction.styles'





class ModalAction extends Component {


    state = {
        startDateTimePickerVisible: false,
        endDateTimePickerVisible: false,
        initialDate: 'Escoge una fecha inicial',
        finalDate: 'Escoge una fecha final',
        currentDateInput: null,

        controls: {
            pillInput: {
                value: "",
                valid: true,
            },
            quantityInput: {
                value: "",
                valid: true
            },
            keywordsInput: {
                value: "",
                valid: true
            },
            frequencyInput: {
                value: "",
                valid: true
            },
            dateInput: {
                value: "",
                valid: true
            },

        }
    }


    // Usar el datetime picker para la fecha inicial.
    _showStartDateTimePicker = (value) => {
        this.setState({
            startDateTimePickerVisible: true,
            currentDateInput: value
        });
    };

    // Usar el datetime picker para la fecha final

    _showEndDateTimePicker = (value) => {
        this.setState({
            endDateTimePickerVisible: false,
            currentDateInput: value
        })
    }

    // Esconder el datetime picker
    _hideStartDateTimePicker = () => {
        this.setState({
            startDateTimePickerVisible: false
        })
    };

    _hideEndDateTimePicker = () => {
        this.setState({
            endDateTimePickerVisible: false
        })
    }

    _handleStartDatePicker = (date) => {
        let readableDate = formatToReadableDate(date)
        this.setState({
            initialDate: readableDate
        })
        this._hideStartDateTimePicker();
    };

    _handleEndDatePicker = (date) => {
        let readableDate = formatToReadableDate(date)
        this.setState({
            finalDate: readableDate
        })
        this._hideEndDateTimePicker();
    }

    _inputChangeHandler = (value, key) => {
        this.setState({
            controls: {
                ...this.state.controls,
                [key]: {
                    ...this.state.controls[key],
                    value: value
                }
            }
        })
    }


    render() {

        let modalContent = null;


        if (this.props.type === 0) {
            modalContent = (
                <FormPill
                    pillNameChange={(value) => this._inputChangeHandler(value, 'pillInput')}
                    pillQuantityChange={(value) => this._inputChangeHandler(value, 'quantityInput')}
                    keywordsChange={(value) => this._inputChangeHandler(value, 'keywordsInput')}
                    hoursFrequencyChange={(value) => this._inputChangeHandler(value, 'frequencyInput')}

                    pillName={this.state.controls.pillInput.value}
                    pillQuantity={this.state.controls.quantityInput.value}
                    keywords={this.state.controls.keywordsInput.value}
                    hoursFrequency={this.state.controls.frequencyInput.value}

                    showStartDatePicker={this._showStartDateTimePicker}
                    showEndDatePicker={this._showEndDateTimePicker}

                    initialDate={this.state.initialDate}
                    finalDate={this.state.finalDate}
                />
            )
        } else if (this.props.type === 1) {
            modalContent = (
                <FormDate 
                    dateNameChange={(value) => this._inputChangeHandler(value, 'dateInput')}
                    dateReason={this.state.controls.dateInput.value}
                
                />
            )
        } else {
            modalContent = (
                <FormCategory />
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
                                {/* Renderizo el contenido del modalContent. */}
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


                {/* Componentes de posicionamiento absoluto */}
                <DateTimePicker
                    isVisible={this.state.startDateTimePickerVisible}
                    onConfirm={this._handleStartDatePicker}
                    onCancel={this._hideStartDateTimePicker}
                />
                 <DateTimePicker
                    isVisible={this.state.endDateTimePickerVisible}
                    onConfirm={this._handleEndDatePicker}
                    onCancel={this._hideEndDateTimePicker}
                />
            </Modal>
        )
    }
}
export default ModalAction;

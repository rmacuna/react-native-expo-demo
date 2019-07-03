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
} from '../../../constants/constants'

import { formatToReadableDate, formatToReadableTime } from '../../../utils/date'
import DateTimePicker from "react-native-modal-datetime-picker"
import FormDate from './FormDate/FormDate'
import FormCategory from './FormCategory/FormCategory'
import FormPill from './FormPill/FormPill'
import styles from './ModalAction.styles'
import { ModalActionProps, ModalActionState } from './ModalAction.interface'





class ModalAction extends React.PureComponent<ModalActionProps, ModalActionState>{
    state: ModalActionState = {
        startDateTimePicker: false,
        endDateTimePicker: false,
        dateControls: {
            pillAction: {
                initialDate: 'Escoge una fecha inicial',
                finalDate: 'Escoge una fecha final'
            },
            dateAction: {
                startDateTimePickerVisible: false,
                startTimePickerVisible: false,
                startDate: 'Escoge una fecha en el calendario',
                hourDate: 'Especifica la hora en el calendario'
            }
        },
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
            dateNameInput: {
                value: "",
                valid: true
            },
            dateReasonInput: {
                value: "",
                valid: true
            }
        }
    }


    // Usar el datetime picker para la fecha inicial.
    _showStartDateTimePicker = (value: any) => {
        this.setState({
            startDateTimePicker: true,
            currentDateInput: value
        });
    };

    // Usar el datetime picker para la fecha final

    _showEndDateTimePicker = (value: any) => {
        this.setState({
            endDateTimePicker: true,
            currentDateInput: value
        })
    }

    // Esconder el datetime picker
    _hideStartDateTimePicker = () => {
        this.setState({
            startDateTimePicker: false
        })
    };

    _hideEndDateTimePicker = () => {
        this.setState({
            endDateTimePicker: false
        })
    }

    _handleStartDatePicker = (date: any) => {
        let readableDate = formatToReadableDate(date)
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                pillAction: {
                    ...this.state.dateControls.pillAction,
                    initialDate: readableDate
                }
            }
        })
        this._hideStartDateTimePicker();
    };

    _handleEndDatePicker = (date: any) => {
        let readableDate = formatToReadableDate(date)
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                pillAction: {
                    ...this.state.dateControls.pillAction,
                    finalDate: readableDate
                }
            }
        })
        this._hideEndDateTimePicker();
    }

    _inputChangeHandler = (value: any, key) => {
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

    _handleDatePicker = (date: any) => {
        const readableDate = formatToReadableDate(date);
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    startDate: readableDate
                }
            }
        })
        console.table([this.state.dateControls, readableDate])
        this._hideDatePicker()
    }


    _handleTimePicker = (time: any) => {
        let readableTime = formatToReadableTime(time);
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    ...this.state.dateControls.dateAction,
                    hourDate: readableTime
                }
            }
        })
        console.table([this.state.dateControls, readableTime])
        this._hideTimePicker()
    }

    _showDatePicker = () => {
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    ...this.state.dateControls.dateAction,
                    startDateTimePickerVisible: true
                }
            }
        })
    }

    _showTimePicker = () => {
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    ...this.state.dateControls.dateAction,
                    startTimePickerVisible: true
                }
            }
        })
    }

    _hideTimePicker = () => {
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    ...this.state.dateControls.dateAction,
                    startTimePickerVisible: false
                }
            }
        })
    }


    _hideDatePicker = () => {
        this.setState({
            dateControls: {
                ...this.state.dateControls,
                dateAction: {
                    ...this.state.dateControls.dateAction,
                    startDateTimePickerVisible: false
                }
            }
        })
    }




    render() {

        let modalContent = null;


if (this.props.type === 0) {
    modalContent = (
        <FormPill
            pillNameChange={(value: any) => this._inputChangeHandler(value, 'pillInput')}
            pillQuantityChange={(value: any) => this._inputChangeHandler(value, 'quantityInput')}
            keywordsChange={(value: any) => this._inputChangeHandler(value, 'keywordsInput')}
            hoursFrequencyChange={(value: any) => this._inputChangeHandler(value, 'frequencyInput')}

            pillName={this.state.controls.pillInput.value}
            pillQuantity={this.state.controls.quantityInput.value}
            keywords={this.state.controls.keywordsInput.value}
            hoursFrequency={this.state.controls.frequencyInput.value}

            showStartDatePicker={this._showStartDateTimePicker}
            showEndDatePicker={this._showEndDateTimePicker}

            initialDate={this.state.dateControls.pillAction.initialDate}
            finalDate={this.state.dateControls.pillAction.finalDate}
        />
    )
} else if (this.props.type === 1) {
    modalContent = (
        <FormDate
            dateNameChange={(value: any) => this._inputChangeHandler(value, 'dateNameInput')}
            dateName={this.state.controls.dateNameInput.value}
            dateReasonChange={(value: any) => this._inputChangeHandler(value, 'dateReasonInput')}
            dateReason={this.state.controls.dateReasonInput.value}

            showDatePicker={this._showDatePicker}
            showHourPicker={this._showTimePicker}

            startDate={this.state.dateControls.dateAction.startDate}
            startHour={this.state.dateControls.dateAction.hourDate}

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
            isVisible={this.state.startDateTimePicker}
            onConfirm={this._handleStartDatePicker}
            onCancel={this._hideStartDateTimePicker}
        />
        <DateTimePicker
            isVisible={this.state.endDateTimePicker}
            onConfirm={this._handleEndDatePicker}
            onCancel={this._hideEndDateTimePicker}
        />

        {/* Date time picker para el modal de citas */}

        <DateTimePicker
            isVisible={this.state.dateControls.dateAction.startDateTimePickerVisible}
            onConfirm={this._handleDatePicker}
            onCancel={this._hideDatePicker}
            mode="date"
        />

        <DateTimePicker
            isVisible={this.state.dateControls.dateAction.startTimePickerVisible}
            onConfirm={this._handleTimePicker}
            onCancel={this._hideTimePicker}
            mode="time"
        />


    </Modal>
)
    }
}
export default ModalAction;

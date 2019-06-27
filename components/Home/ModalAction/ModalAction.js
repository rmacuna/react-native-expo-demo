import React, { Component } from 'react'
import {
    View,
    Text,
    Modal,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native'
import {
    STATUSBAR_PRIMARY_COLOR,
    COLOR_SECONDARY,
    COLOR_EMPHASIS
} from './../../../constants/constants';

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
        if (this.state.currentDateInput === 0) {
            this.setState({
                initialDate: date.toString()
            })
        } else if (this.state.currentDateInput === 1) {
            this.setState({
                finalDate: date.toString()
            })
        }

        this._hideDateTimePicker()
    };

    //     switch(props.type) {
    //         case 0:
    //         modalContent = (
    //             <View>
    //                 <SquareInput
    //                     onChangeText={props.pillNameChange}
    //                     value={props.pillName}
    //                     placeholder="Nombre"
    //                     icon={false}
    //                 />
    //                 <SquareInput
    //                     onChangeText={props.pillQuantityChange}
    //                     value={props.pillQuantity}
    //                     placeholder="Cantidad"
    //                     icon={false}
    //                 />
    //                 <Text style={styles.hint}>
    //                     Ingresa palabras que identifiquen el dato a agregar, cosas con las que puedas relacionarlas.
    //                     </Text>
    //                 <SquareInput
    //                     onChangeText={props.keywordsChange}
    //                     value={props.keywords}
    //                     placeholder="Palabras clave"
    //                     icon={false}
    //                 />
    //                 <Text style={styles.subtitle}>Frecuencia</Text>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={{ flex: .7 }}>
    //                         <NavyButton
    //                             onPress={_showDateTimePicker}
    //                             style={{ borderRadius: 6, marginRight: 5 }}
    //                             color="#fff"
    //                             backgroundColor={COLOR_SECONDARY}>Fecha Inicio</NavyButton>
    //                     </View>
    //                     <View style={styles.center}>
    //                         <Text>Escoge una fecha inicial</Text>
    //                     </View>
    //                 </View>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={{ flex: .7 }}>
    //                         <NavyButton
    //                             style={{ borderRadius: 6, marginRight: 5 }}
    //                             color="#fff"
    //                             backgroundColor={COLOR_EMPHASIS}>Fecha Fin</NavyButton>
    //                     </View>
    //                     <View style={styles.center}>
    //                         <Text>Escoge una fecha final</Text>
    //                     </View>
    //                 </View>
    //                 <Text style={styles.hint}>
    //                     Ingresa cada cuantas horas quieres que te recuerde el medicamento
    //                     </Text>
    //                 <SquareInput
    //                     onChangeText={props.hoursFrequencyChange}
    //                     value={props.hoursFrequency}
    //                     placeholder="Frecuencia en horas"
    //                     icon={false}
    //                 />
    //             </View>
    //         )
    //         break;
    //         case 1:
    //         modalContent = (
    //             <Text>
    //                 Hola Yo añadire una cita
    //                 </Text>
    //         )
    //         break;
    //         case 2:
    //         modalContent = (
    //             <Text>Hola yo añadire una categoria</Text>
    //         )
    //         break;
    //         default:
    //         return null
    // }

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
                                onPress={() =>this._showDateTimePicker(1)}
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

import React from 'react'
import { View, Text, Modal, StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { COLOR_PRIMARY, STATUSBAR_PRIMARY_COLOR, COLOR_DARK, FONT_SIZE, COLOR_DARK_PLACEHOLDER, COLOR_SECONDARY, COLOR_EMPHASIS } from '../../../constants/constants';
import { Ionicons } from '@expo/vector-icons';
import SquareInput from './../SquareInput/SquareInput';
import CustomInput from './../CustomInput/CustomInput'
import NavyButton from '../NavyButton/NavyButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARY,
    },
    card: {
        paddingTop: StatusBar.currentHeight,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 10,
        flex: 1,
    },
    hint: {
        paddingTop: 20,
        fontFamily: 'GorditaRegular',
        color: COLOR_DARK_PLACEHOLDER,
        fontSize: FONT_SIZE.medium,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    modalHeader_title: {
        fontFamily: 'GorditaBold',
        color: COLOR_DARK,
        textAlign: 'center',
        fontSize: FONT_SIZE.xlarge,
    },
    modalFooter: {
        width: '100%',
        position: 'absolute',
        marginBottom: '20%',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    subtitle: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.xlarge,
        paddingTop: 15,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})





const ModalAction = (props) => {
    let modalContent = null;

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

        </Modal>
    )
}

export default ModalAction

import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { HOME_BACKGROUND_COLOR, COLOR_EMPHASIS, COLOR_PRIMARY } from '../../../constants/constants';
import { SafeAreaView } from 'react-navigation';
import { FontAwesome5 } from '@expo/vector-icons';
import NavyButton from '../../../components/UI/NavyButton/NavyButton';
import { Platform } from '@unimodules/core';

export default class Homescreen extends Component {


    _onPressButtonHandler = () => {
    }

    _onNavigateTo = route => this.props.navigator.navigate(route)

    render() {
        return (
            <View
                style={{
                        backgroundColor: HOME_BACKGROUND_COLOR,
                        height: '100%',
                        width: '100%',
                    }}>
                <ImageBackground
                    style={{
                        width: '100%',
                        height: 560,
                    }}
                    source={require('./../../../assets/images/homeSvgBackground.png')} >
                    <SafeAreaView>
                        <View style={styles.topContainer}>
                            <View style={styles.horizontalWrapper}>
                                <View>
                                    <Text style={styles.title}> Inicio </Text>
                                    <Text style={styles.subtitle}>Jhon Doe</Text>
                                    <Text style={styles.date}>Dom 06.06.2019</Text>
                                </View>
                                <Image
                                    style={{ width: 70, height: 70 }}
                                    source={require('./../../../assets/images/reminder.png')}
                                />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <NavyButton onPress={this._onPressButtonHandler} >Proxima pastilla</NavyButton>
                                <Text style={styles.hint}>Presiona el boton para buscar la pastilla más proxima a tomar.</Text>
                            </View>
                            <View style={styles.categoryWrapper}>
                                <View style={styles.horizontalWrapper}>
                                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                                        <Text style={styles.inlineSubtitle}>Categoria</Text>
                                        <Text style={[styles.hint, { fontSize: 16, marginTop: -10, paddingLeft: -5, color: COLOR_EMPHASIS }]}>Jhon Doe</Text>
                                    </View>
                                </View>
                                <View style={styles.horizontalWrapper} >
                                    {/* Debería ser un componente */}
                                    <View style={styles.card}>
                                        <Text style={styles.cardTitle}>Pastillas</Text>
                                        <View style={{ width: '100%', paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 75, height: 75 }}
                                                source={require('../../../assets/images/medicine.png')}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.card}>
                                        <Text style={styles.cardTitle}>Citas</Text>
                                        <View style={{ width: '100%', paddingTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 75, height: 75 }}
                                                source={require('../../../assets/images/calendar.png')}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.horizontalWrapper}>
                                    <Text style={styles.inlineSubtitle}>Añadir</Text>
                                </View>
                                <View style={styles.horizontalWrapper}>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.cardCircle}>
                                            <Image
                                                style={{ width: 35, height: 35 }}
                                                source={require('../../../assets/images/pills.png')}
                                            />
                                        </View>
                                        <Text style={styles.hint}>Pastilla</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.cardCircle}>
                                            <Image
                                                source={require('../../../assets/images/weekly-calendar.png')}
                                                style={{ width: 35, height: 35 }}
                                            />
                                        </View>
                                        <Text style={styles.hint}>Cita</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.cardCircle}>
                                            <Image
                                                source={require('../../../assets/images/folder.png')}
                                                style={{ width: 35, height: 35 }}
                                            />
                                        </View>
                                        <Text style={styles.hint}>Categoria</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        paddingTop: 45,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: Platform.OS === "android" ? 20 : null
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'GorditaBold'
    },
    card: {
        marginTop: 12,
        width: '40%',
        height: '100%',
        backgroundColor: '#504265',
        borderRadius: 12,
        padding: 15
    },
    cardCircle: {
        width: 70,
        height: 70,
        backgroundColor: '#FFE3DC',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'GorditaMedium'
    },
    subtitle: {
        color: 'rgba(255,255,255, .8)',
        fontFamily: 'GorditaBold',
        fontSize: 14,
        paddingLeft: 7
    },
    inlineSubtitle: {
        color: COLOR_PRIMARY,
        fontFamily: 'GorditaMedium',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 10
    },
    date: {
        color: COLOR_EMPHASIS,
        fontSize: 16,
        fontFamily: 'GorditaMedium',
        paddingLeft: 5
    },
    hint: {
        fontFamily: 'GorditaMedium',
        color: '#FFE3DC',
        paddingLeft: 5,
        paddingTop: 5
    },
    horizontalWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

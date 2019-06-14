import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { HOME_BACKGROUND_COLOR } from './../../../constants/constants';
import { SafeAreaView } from 'react-navigation';
import NavyButton from '../../../components/UI/NavyButton/NavyButton';
import CategorySlider from './../../../components/Home/CategorySlider/CategorySlider';
import styles from './Homescreen.styles';

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
                                <CategorySlider />    
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


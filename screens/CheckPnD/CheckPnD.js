import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Picker,
    TouchableOpacity,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './CheckPnD.styles';
import SquareInput from '../../components/UI/SquareInput/SquareInput';
import { COLOR_SECONDARY } from '../../constants/constants';
import IconList from '../../components/IconList/IconList';
import Header from '../../components/Check/Header/Header';

class CheckPnD extends Component {

    // Atributo de la clase para saber que tipo de titulo desplegar

    state = {
        inputSearch: {
            value: ""
        },
        categories: [
            // {
            //     key: '1',
            //     label: 'Acetaminofen',
            //     value: 'acetaminofen',
            //     image: {uri: 'https://encolombia.com/wp-content/uploads/2014/04/acetaminofen-urg-1.jpg'}
            // },
        ],
        category: 'roberto'

    }

    _onBackButtonPress = () => {
        this.props.navigation.goBack();
    }

    _onSearchTextChangeHandler = (value) => {
        this.setState({
            inputSearch: {
                value: value
            }
        })
    }

    _onPickerValueChange = (itemValue, itemIndex) => {
        // Creo una copia del array para no mutar el estado.
        const arrayCopy = [...this.state.categories];

        const indexOfItemFounded = arrayCopy.findIndex((element, index) => {
            return index === itemIndex && element.value === itemValue
        });

        this.setState({
            category: arrayCopy[indexOfItemFounded].value
        });
    }
    render() {
        const { navigation } = this.props;
        const type = navigation.getParam('type');
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLOR_SECONDARY} />
                <SafeAreaView style={styles.centerItems}>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <Header
                                headerTitle={type === 0 ? "Pastillas" : "Citas"}
                                onBackPress={this._onBackButtonPress} />
                        </View>
                        <View style={styles.row}>
                            <SquareInput
                                value={this.state.inputSearch.value}
                                onChangeText={this._onSearchTextChangeHandler.bind(this)}
                            />
                        </View>

                        <View style={[styles.row, { justifyContent: 'space-between', marginTop: 40 }]}>
                            <View>
                                <Text style={styles.title}>Todas</Text>
                                <Text style={styles.subtitle} >de {this.state.category}</Text>
                            </View>
                            <View>
                                {/* <Picker
                                    selectedValue={this.state.category}
                                    style={{ height: 30, width: 110 }}
                                    onValueChange={(itemValue, itemIndex) => this._onPickerValueChange(itemValue, itemIndex)}>
                                    {
                                        this.state.categories.map((category, index) => {
                                            return <Picker.Item key={index} label={category.label} value={category.value} />
                                        })
                                    }
                                </Picker> */}
                            </View>
                        </View>
                        <ScrollView style={styles.listWrapper}>
                            <IconList listData={this.state.categories} />
                        </ScrollView>
                        <View style={styles.footer}>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Text style={styles.footerButton}>Aplicar Filtro</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Text style={styles.footerButton}>Añadir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>

            </View>
        )
    }
}

export default CheckPnD
import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Picker,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    ActionSheetIOS,
    StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './CheckPnD.styles';
import SquareInput from '../../components/UI/SquareInput/SquareInput';
import { COLOR_SECONDARY } from '../../constants/constants';

class CheckPnD extends Component {


    state = {
        categories: [
            {
                label: 'Roberto',
                value: 'roberto',
            },
            {
                label: 'Tommy',
                value: 'tommy',
            },
            {
                label: 'Mama',
                value: 'mama',
            }
        ],
        category: 'roberto'

    }

    _onBackButtonPress = () => {
        this.props.navigation.goBack();
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

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLOR_SECONDARY} />
                <SafeAreaView style={styles.centerItems}>
                    <View style={styles.card}>
                        <View style={styles.row}>
                            <TouchableWithoutFeedback onPress={this._onBackButtonPress}>
                                <Ionicons
                                    size={24}
                                    name={Platform.OS === "android" ?
                                        "md-arrow-back" : "ios-arrow-back"}
                                />
                            </TouchableWithoutFeedback>
                            <Text style={styles.headerTitle}>Pastillas</Text>
                        </View>
                        <View style={styles.row}>
                            <SquareInput />
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
                        <ScrollView>
                            {this.state.categories.map((category, index) => {
                                return <Text key={index}>{category.label}</Text>
                            })}
                        </ScrollView>
                    </View>
                </SafeAreaView>

            </View>
        )
    }
}

export default CheckPnD
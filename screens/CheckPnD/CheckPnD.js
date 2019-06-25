import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    Picker,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    StatusBar
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './CheckPnD.styles';
import SquareInput from '../../components/UI/SquareInput/SquareInput';
import { COLOR_SECONDARY } from '../../constants/constants';
import RNPickerSelect from 'react-native-picker-select';

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
        ]

    }

    _onBackButtonPress = () => {
        this.props.navigation.goBack();
    }

    render() {

        const placeholder = {
            label: this.state.categories[0].value,
            value: null,
            color: '#9EA0A4',
        };

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
                                <Text style={styles.subtitle} >de Roberto</Text>
                            </View>
                            <View>
                                <RNPickerSelect
                                    placeholder={placeholder}
                                    items={this.state.categories}
                                    onValueChange={value => {
                                        this.setState({
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
                                        });
                                    }}
                                    // onUpArrow={() => {
                                    //     this.inputRefs.firstTextInput.focus();
                                    // }}
                                    // onDownArrow={() => {
                                    //     this.inputRefs.favSport1.togglePicker();
                                    // }}
                                    // style={pickerSelectStyles}
                                    value={this.state.categories[0].value}
                                // ref={el => {
                                //     this.inputRefs.favSport0 = el;
                                // }}
                                />
                            </View>
                        </View>
                        <ScrollView>

                        </ScrollView>
                    </View>
                </SafeAreaView>

            </View>
        )
    }
}

export default CheckPnD
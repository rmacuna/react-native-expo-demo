import React, { useState, useEffect } from 'react'
import { View, Text, Modal, SafeAreaView, TouchableWithoutFeedback, Animated, Keyboard, Alert } from 'react-native'
import styles from './CategoryAdd.styles'
import SquareInput from '../../UI/SquareInput/SquareInput'
import { AnimationState, InputState } from './CategoryAdd.interface'
import ColorSquare from '../ColorSquare/ColorSquare';
import { COLOR_EMPHASIS, COLOR_LINK, COLOR_PRIMARY, COLOR_DARK_PLACEHOLDER, COLOR_DARK, COLOR_SECONDARY } from '../../../constants/constants';
import NavyButton from '../../UI/NavyButton/NavyButton';

const CategoryAdd = (props) => {




    const [input, setInput] = useState<InputState>({
        nameInput: {
            value: "",
            isEmpty: true,
            animationState: {
                initialOpacity: new Animated.Value(0),
                initialPositionY: new Animated.Value(20),
            }
        },
        descriptionInput: {
            value: "",
            isEmpty: true,
            animationState: {
                initialOpacity: new Animated.Value(0),
                initialPositionY: new Animated.Value(20)

            }
        },
        colorOneSelected: false,
        colorTwoSelected: false,
        colorThreeSelected: false,
        colorFourthSelected: false,
    })



    // Inicia la animacion del label que aparece al lado del input para indicarnos que estamos escribiendo
    const startLabelAnimation = (keyInput) => {
        Animated.parallel([
            Animated.spring(input[keyInput].animationState.initialOpacity, {
                toValue: 1
            }),
            Animated.spring(input[keyInput].animationState.initialPositionY, {
                toValue: 0,
            })

        ]).start()
    }

    // Esconde la animacion del label que aparece al lado del input para indicarnos que estamos escribiendo
    const hideLabelAnimation = (keyInput) => {
        Animated.parallel([
            Animated.spring(input[keyInput].animationState.initialOpacity, {
                toValue: 0
            }),
            Animated.spring(input[keyInput].animationState.initialPositionY, {
                toValue: 20,
            })

        ]).start()
    }

    const handleTextChange = (value, key) => {

        let inputValue = value

        setInput({
            ...input,
            [key]: {
                ...input[key],
                value: value,
                isEmpty: value === ''
            }
        })
        if (!input[key].labelWasTrigger) {
            console.log('Entro')
            startLabelAnimation(key)
        }


    }

    const inputBlurHandler = (value, keyValue) => {
        if (input[keyValue].isEmpty) {
            hideLabelAnimation(keyValue)
        }
    }

    const onSelectColor = (key) => {
        switch (key) {
            case 1:
                setInput({
                    ...input,
                    colorOneSelected: true,
                    colorTwoSelected: false,
                    colorFourthSelected: false,
                    colorThreeSelected: false
                })
                break
            case 2:
                setInput({
                    ...input,
                    colorTwoSelected: true,
                    colorOneSelected: false,
                    colorFourthSelected: false,
                    colorThreeSelected: false
                })
                break
            case 3:
                setInput({
                    ...input,
                    colorThreeSelected: true,
                    colorTwoSelected: false,
                    colorFourthSelected: false,
                    colorOneSelected: false
                })
                break
            case 4:
                setInput({
                    ...input,
                    colorFourthSelected: true,
                    colorOneSelected: false,
                    colorThreeSelected: false,
                    colorTwoSelected: false
                })
                break
        }
    }

    // if (input.nameInput.isEmpty && animation.renderLabel) {
    //     hideLabelAnimatio
    // } else if (!input.nameInput.isEmpty && !animation.renderLabel) {
    //     startLabelAnimation()
    // }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.modalContainer}>
                    <SquareInput
                        labelPlaceholderTitle="Nombre"
                        icon={false}
                        autoFocus={!input.nameInput.isEmpty}
                        onChangeText={(value) => handleTextChange(value, 'nameInput')}
                        onBlur={(value) => inputBlurHandler(value, 'nameInput')}
                        valid={input.nameInput.isEmpty}
                        initialPositionY={input.nameInput.animationState.initialPositionY}
                        initialOpacity={input.nameInput.animationState.initialOpacity}
                        value={input.nameInput.value}
                        placeholder="Nombre"
                    />
                    <Text style={styles.subtitle}>Descripción</Text>

                    <SquareInput
                        labelPlaceholderTitle="Descripcion"
                        icon={false}
                        multiline={true}
                        autoFocus={!input.descriptionInput.isEmpty}
                        onChangeText={(value) => handleTextChange(value, 'descriptionInput')}
                        onBlur={(value) => inputBlurHandler(value, 'descriptionInput')}
                        valid={input.descriptionInput.isEmpty}
                        initialPositionY={input.descriptionInput.animationState.initialPositionY}
                        initialOpacity={input.descriptionInput.animationState.initialOpacity}
                        value={input.descriptionInput.value}
                        placeholder="Descripcion"
                    />

                    <Text style={styles.hint}>Selecciona un color para identificar la categoría</Text>

                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <ColorSquare
                            selectColor={() => onSelectColor(1)}
                            selected={input.colorOneSelected}
                            style={{ flex: 1 }}
                            squareRadius={50}
                            squareColor={COLOR_EMPHASIS} />
                        <ColorSquare
                            selectColor={() => onSelectColor(2)}
                            selected={input.colorTwoSelected}
                            style={{ flex: 1 }}
                            squareRadius={50}
                            squareColor={COLOR_LINK} />
                        <ColorSquare
                            selectColor={() => onSelectColor(3)}
                            squareRadius={50}
                            selected={input.colorThreeSelected}
                            style={{ flex: 1 }}
                            squareColor={COLOR_SECONDARY} />

                        <ColorSquare
                            selectColor={() => onSelectColor(4)}
                            selected={input.colorFourthSelected}
                            squareRadius={50}
                            style={{ flex: 1 }}
                            squareColor={COLOR_PRIMARY} />
                    </View>

                    <View style={
                        {
                            flexDirection: "row",
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            margin: 20
                        }}>
                        <NavyButton
                            style={{ width: '100%' }}
                            color={COLOR_DARK}
                            backgroundColor={COLOR_PRIMARY}>
                            Crear
                        </NavyButton>
                    </View>




                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

export default CategoryAdd

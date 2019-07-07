import React, { useState, useEffect } from 'react'
import { View, Text, Modal, SafeAreaView, TouchableWithoutFeedback, Animated, Keyboard, Alert } from 'react-native'
import styles from './CategoryAdd.styles'
import SquareInput from '../../UI/SquareInput/SquareInput'
import { AnimationState, InputState } from './CategoryAdd.interface'

const CategoryAdd = (props) => {

    
    

    const [input, setInput] = useState<InputState>({
        nameInput: {
            value: "",
            isEmpty: true,
            labelWasTrigger: false,
            animationState: {
                initialOpacity: new Animated.Value(0),
                initialPositionY: new Animated.Value(20),
            }
        },
        descriptionInput: {
            value: "",
            isEmpty: true,
            labelWasTrigger: false,
            animationState: {
                initialOpacity: new Animated.Value(0),
                initialPositionY: new Animated.Value(20)

            }
        }
    })


    useEffect(() => {
        
    }, [input])


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
        setInput({
            ...input,
            [keyInput]: {
                ...input[keyInput],
                labelWasTrigger: true
            }
        })

        

        // setInput({
        //     ...input,
        //     [keyInput]: { 
        //         ...input[keyInput]
        //     }
        // })

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


        // setInput({
        //     ...input,
        //     [keyInput]: {
        //         ...input[keyInput],
        //         labelWasTrigger: false,
        //     }
        // })

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
        } else if (inputValue.trim().length === 0 ) {
            console.log('labelWasTrigger')
            hideLabelAnimation(key)
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
                        valid={input.descriptionInput.isEmpty}
                        initialPositionY={input.descriptionInput.animationState.initialPositionY}
                        initialOpacity={input.descriptionInput.animationState.initialOpacity}
                        value={input.descriptionInput.value}
                        placeholder="Descripcion"
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

export default CategoryAdd

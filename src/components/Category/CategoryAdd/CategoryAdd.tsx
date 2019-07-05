import React, { useState } from 'react'
import { View, Text, Modal, SafeAreaView, TouchableWithoutFeedback, Animated } from 'react-native'
import styles from './CategoryAdd.styles'
import SquareInput from '../../UI/SquareInput/SquareInput'
import { AnimationState, InputState } from './CategoryAdd.interface'

const CategoryAdd = (props) => {


    const [animation, setAnimation] = useState<AnimationState>({
        inputHasValidText: false,
        renderLabel: false,
        initialOpacity: new Animated.Value(0),
        initialPositionY: new Animated.Value(20)
    })

    const [input, setInput] = useState<InputState>({
        inputValue: {
            value: "",
            isEmpty: true
        }
    })

     // Inicia la animacion del label que aparece al lado del input para indicarnos que estamos escribiendo
     const startLabelAnimation = () => {
        
        Animated.parallel([
            Animated.spring(animation.initialOpacity, {
                toValue: 1
            }),
            Animated.spring(animation.initialPositionY, {
                toValue: 0,
            })

        ]).start()

        setAnimation({
            ...animation,
            renderLabel: true,
        })
    }

    // Esconde la animacion del label que aparece al lado del input para indicarnos que estamos escribiendo
    const hideLabelAnimation = () => {
        Animated.parallel([
            Animated.spring(animation.initialOpacity, {
                toValue: 0
            }),
            Animated.spring(animation.initialPositionY, {
                toValue: 20,
            })

        ]).start()
        setAnimation({
            ...animation,
            renderLabel: false,
            // initialOpacity: new Animated.Value(0),
            // initialPositionY: new Animated.Value(20)
        })
    }

    const handleTextChange = (value) => {
        setInput({
            inputValue: {
                value: value,
                isEmpty: value.trim().length === 0
            }
        })
    }

    if (input.inputValue.isEmpty && animation.renderLabel) {
        hideLabelAnimation()
    } else if (!input.inputValue.isEmpty && !animation.renderLabel) {
        startLabelAnimation()
    }
    
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.modalContainer}>
                    <SquareInput
                        labelPlaceholderTitle="Nombre"
                        icon={false}
                        autoFocus={!input.inputValue.isEmpty}
                        onChangeText={(value) => handleTextChange(value)}
                        valid={input.inputValue.isEmpty}
                        initialPositionY={animation.initialPositionY}
                        initialOpacity={animation.initialOpacity}
                        value={input.inputValue.value}
                        placeholder="Nombre"
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

export default CategoryAdd

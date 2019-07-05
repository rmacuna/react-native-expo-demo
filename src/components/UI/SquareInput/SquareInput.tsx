import React, { useState } from 'react'
import { View, Text, TextInput, Animated, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './SquareInput.styles';

const SquareInput = (props) => {

    let textInput: JSX.Element = null

    if (props.labelPlaceholderTitle) {
        textInput = (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput  {...props} style={[styles.squareInput, { flex: .8 }]} />
                <Animated.Text
                    style={
                        [styles.labelIndicator,
                        {
                            opacity: props.initialOpacity,
                            transform: [
                                {
                                    translateY: props.initialPositionY
                                }
                            ]
                        },
                        { flex: .2 }
                        ]}>
                    {props.labelPlaceholderTitle}
                </Animated.Text>
            </View>
        )
    } else {
        textInput = (
            <TextInput {...props} style={styles.squareInput} />
        )
    }

    return (
        <View style={styles.rowContainer}>
            {props.icon ?
                <Ionicons
                    size={20}
                    color="#B6B6B6"
                    name="md-search" /> : null
            }
            {textInput}
        </View>
    )
}

SquareInput.defaultProps = {
    icon: true,
    placeholder: "Buscar"
}

export default SquareInput

import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { ColorSquareProps } from './ColorSquare.interface';



/**
 * 
 * Este es un componente hecho solamente con el proposito de aprender a hacer una implementacion
 * de un UI component.
 * 
 * @param props Contiene los estilos de los cuadros de colores.
 */
const ColorSquare = (props: ColorSquareProps) => {
    return (
        <TouchableWithoutFeedback onPress={props.selectColor}>
            <View
                style={[
                    styles.squarebox,
                    {
                        borderRadius: props.squareRadius,
                        backgroundColor: props.squareColor,
                    },
                    props.selected ? {borderColor: "rgba(0,0,0,.7)", borderWidth: 4} : null
                ]}>
            </View>
        </TouchableWithoutFeedback>

    )
}



const styles = StyleSheet.create({
    squarebox: {
        width: 50,
        height: 50,
        marginRight: 10
    }
})

export default ColorSquare

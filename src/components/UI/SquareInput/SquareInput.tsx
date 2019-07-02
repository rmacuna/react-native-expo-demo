import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './SquareInput.styles';

const SquareInput = (props) => {
    return (
        <View style={styles.rowContainer}>
            {props.icon ?
                <Ionicons
                    size={20}
                    color="#B6B6B6"
                    name="md-search" /> : null
            }

            <TextInput {...props} style={styles.squareInput} />
        </View>
    )
}

SquareInput.defaultProps = {
    icon: true,
    placeholder: "Buscar"
}

export default SquareInput

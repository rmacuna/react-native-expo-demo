import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import styles from './SquareInput.styles';

const SquareInput = () => {
    return (
        <View style={styles.rowContainer}>
            <Ionicons 
                size={20} 
                color="#B6B6B6"
                name="md-search" />
            <TextInput style={styles.squareInput} placeholder="Buscar" />
        </View>
    )
}

export default SquareInput

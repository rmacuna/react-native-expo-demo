import React from 'react'
import { View, Text } from 'react-native'
import styles from './CardItem.style';

const CardItem = (props) => {
    return (
        <View style={[styles.card, { borderBottomWidth: 5, borderBottomColor: props.category.colorBar }]}>
            <Text style={styles.cardTitle}>{props.category.categoryName}</Text>
        </View>
    )
}

export default CardItem

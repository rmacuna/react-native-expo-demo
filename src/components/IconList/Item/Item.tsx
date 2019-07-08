import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Item.styles';

const Item = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressItem}>
            <View style={styles.listItem}>
                <Image style={styles.pillImage} resizeMode="cover" source={props.pillImage} />
                <Text style={{fontFamily: 'GorditaRegular'}}>{props.pillName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Item

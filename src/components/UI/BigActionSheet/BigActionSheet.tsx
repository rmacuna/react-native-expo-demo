import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Animated,
    TouchableWithoutFeedback
} from 'react-native'
import styles from './BigActionSheet.styles'
import IconList from '../../IconList/IconList'
import { Ionicons } from '@expo/vector-icons'

const BigActionSheet = (props) => {


    // const [ animation, useAnimation ] = useState({

    // })
    if (!props.visible) {
        return null
    }

    return (
        <Animated.View style={[
            styles.containerCard,
            {
                transform: [
                    {
                        translateY: props.animation
                    }
                ]
            }
        ]}>
            <View style={styles.iconBar}>
                <TouchableWithoutFeedback onPress={props.onClose}>
                    <Ionicons  name="md-close" size={22} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.rowHeader}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <IconList
                    listData={props.data}
                />
            </ScrollView>
        </Animated.View>
    )
}

export default BigActionSheet

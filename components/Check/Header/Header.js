import React from 'react'
import { View, Text, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ICON_SIZES, FONT_SIZE } from '../../../constants/constants';


const styles = StyleSheet.create({
    headerTitle: {
        width: '100%',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    item: {
        flex: .1
    },
    title: {
        flex: .9,
        textAlign: 'center',
        fontFamily: 'GorditaBold',
        fontSize: FONT_SIZE.xlarge
    }

});


const Header = (props) => {
    return (
        <View style={styles.headerTitle}>
            <Ionicons
                onPress={props.onBackPress}
                style={styles.item}
                size={ICON_SIZES.huge}
                name={Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"} />
            <Text style={[styles.item, styles.title]}>{props.headerTitle}</Text>
        </View>
    )
}

export default Header

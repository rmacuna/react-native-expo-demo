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
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    item: {
        flex: .1
    },
    floatIcon: {
        position: 'absolute',
        left: 0,
        zIndex: 10,
        paddingTop: 2,
        width: 30,
        height: 30
    },
    title: {
        flex: 1,
        alignItems: 'center',
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
                style={styles.floatIcon}
                size={ICON_SIZES.huge}
                name={Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"} />
            <Text style={styles.title}>{props.headerTitle}</Text>
        </View>
    )
}

export default Header

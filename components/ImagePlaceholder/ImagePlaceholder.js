import React from 'react'
import { View, Image, Text } from 'react-native'
import { FONT_SIZE } from '../../constants/constants';

const ImagePlaceholder = (props) => {
    return (
        <View style={{
            flex: 1,
            padding: 25,
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'rgba(255,255,255,1)',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                style={{ width: 100, height: 100}}
                source={require('./../../assets/images/box.png')} />

            <Text style={{ fontFamily: 'GorditaMedium', color: 'rgba(0,0,0,.5)', fontSize: FONT_SIZE.large }}>No hay nada en esta lista !</Text>
        </View>
    )
}

export default ImagePlaceholder

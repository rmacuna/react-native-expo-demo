import React from 'react'
import { View, Image } from 'react-native'

const ImagePlaceholder = (props) => {
    return (
        <View style={{
            flex: 1,
            padding: 25,
            backgroundColor: props.backgroundColor ? props.backgroundColor : 'rgba(240,240,240,1)',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                style={{ width: 100, height: 100 }} 
                source={require('./../../assets/images/box.png')} />
        </View>
    )
}

export default ImagePlaceholder

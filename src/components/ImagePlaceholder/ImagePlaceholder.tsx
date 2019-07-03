import React from 'react'
import { View, Image, Text, ViewStyle } from 'react-native'
import { FONT_SIZE } from '../../constants/constants'
import ImagePlaceHolderProps from './props.interface'
import styles from './ImagePlaceholder.styles'

const ImagePlaceholder: React.FC<ImagePlaceHolderProps> = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('./../../assets/images/box.png')} />
            <Text style={styles.textPlaceHolder}>No hay nada en esta lista !</Text>
        </View >
    )
}

ImagePlaceholder.defaultProps = {
    backgroundColor: 'rgba(255,255,25,1)'
}


export default ImagePlaceholder

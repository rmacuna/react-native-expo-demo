import {ViewStyle, TextStyle, TextInputProps, ViewProps} from 'react-native'


/**
 * 
 * 
 * @interface SquareInputStyles
 * Inteface de square input se hace para crear consistencia en el código de los estilos 
 * del elemento
 * @author rmacuna
 */

 export default interface SquareInputStyles {
     squareInput: ViewStyle,
     rowContainer: ViewStyle,
     labelIndicator: ViewStyle
 }

 
 export interface SquareInputProps extends TextInputProps {
    labelPlaceholderTitle?: string,
    icon?: boolean,
    initialOpacity?: any,
    initialPositionY?: any,
    valid?: boolean
 }
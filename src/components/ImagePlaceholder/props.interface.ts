import { ViewStyle } from 'react-native'


/**
 * 
 * @backgroundColor
 * Especificar el color de fondo que se mostrara detras de la imagen del componente,
 * usado para renderizar algo cuando no existan elementos en el componente lista
 */
export default interface ImagePlaceHolderProps {
    backgroundColor?: string | undefined,
    children?: JSX.Element,
} 


export interface Styles {
    container: ViewStyle,
    textPlaceHolder: ViewStyle
} 
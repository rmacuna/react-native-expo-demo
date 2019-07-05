import { ViewStyle } from 'react-native';
import { AnimatedValue } from 'react-navigation';

/**
 * @interface CategoryStyles
 * 
 * @description
 * Inteface para declarar estilos
 */
export interface CategoryStyles {
    modalContainer: ViewStyle,
}



/**
 * @interface AnimationState
 * 
 * @description 
 * Interface para declarar el estado de las animaciones.
 * 
 */
export interface AnimationState {
    inputHasValidText: boolean,
    renderLabel: boolean,
    initialOpacity: any,
    initialPositionY: any
}

/**
 * @interface InputState
 * 
 * @description
 * Interfce para declarar el estado del form.
 * 
 */

export interface InputState {
    inputValue: {
        value: string,
        isEmpty: boolean
    }
}
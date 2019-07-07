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
    subtitle: ViewStyle
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


 type animatedInput = {
     initialOpacity: any,
     initialPositionY: any
 }

 type inputControl = {

    // Valor para controlar el estado del input y poder hacer two way data binding
     value: string,

     labelWasTrigger: boolean

     // Usado para verificar cuando el valor del input esta vacio y poder así desplegar el label animado a la derecha.
     isEmpty: boolean,


     animationState?: animatedInput
    
 }



export interface InputState {
    nameInput: inputControl,
    descriptionInput: inputControl,

    
}
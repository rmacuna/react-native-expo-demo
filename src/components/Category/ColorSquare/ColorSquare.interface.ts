import { ViewStyle, GestureResponderEvent } from "react-native";




export interface ColorSquareProps {
    squareRadius: number,
    squareColor: string,
    size?: "small" | "medium" | "big",
    style: ViewStyle,
    selectColor?: (event: GestureResponderEvent) => void, 
    selected?: boolean

}
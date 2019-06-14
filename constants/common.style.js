

import { StyleSheet } from 'react-native';
import { FONT_SIZE, COLOR_DARK } from '../constants/constants';
// Default theme of the app..

export const buttonSchema = StyleSheet.create({
    buttonDefault: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.large,   
    }
});

export const typographySchema = StyleSheet.create({
    fontDefault: {
        color: COLOR_DARK,
        fontFamily: 'GorditaMedium',
        paddingTop: 5,
        paddingBottom: 5
    }
});

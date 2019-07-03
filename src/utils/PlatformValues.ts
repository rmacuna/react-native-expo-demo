import { Platform } from 'react-native'

export const getValuesForPlatforms = () => {
    if (Platform.OS === 'android') {
        return (
            {
                paddingBottomForLabel: 10,
                paddingTopForLabel: '10%',

                heightForBottomTab: 64,
                paddingTopForTab: '10%'
            }
        )
    } else {
        return (
            {
                paddingBottomForLabel: null,
                paddingTopForLabel: null,

                heightForBottomTab: 50,
                paddingTopForTab: null 
            }
        )
    }
}
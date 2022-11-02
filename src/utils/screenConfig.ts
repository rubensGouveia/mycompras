// import { DefaultTheme } from 'styled-components/native'
// import { HeaderStyleInterpolators, StackHeaderStyleInterpolator } from '@react-navigation/native-stack'

// interface ScreenConfig {
//   animationEnabled: boolean
//   gestureEnabled: boolean
//   headerShown: boolean
//   headerBackTitleVisible: boolean
//   headerStyleInterpolator: StackHeaderStyleInterpolator
//   headerStyle: {
//     backgroundColor: string
//   }
//   headerTitleStyle: {
//     color: string
//   }
// }
function screenConfig() {
    return {
        animationEnabled: true,
        gestureEnabled: true,
        headerShown: false,
        headerBackTitleVisible: false,
        // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        // headerStyle: {
        //   backgroundColor: theme.colors.background,
        // },
        // headerTitleStyle: {
        //   color: theme.colors.title,
        // },
    }
}

export default screenConfig

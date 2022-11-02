import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BarCodeScreen } from '@screens/BarCodeScreen'
import { HomeScreen } from '@screens/HomeScreen'
import { LoadedScreen } from '@screens/LoadedScreen'
import { WebViewScreen } from '@screens/WebViewScreen'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="home"
                component={HomeScreen}
            />
            <Screen
                name="barcode"
                component={BarCodeScreen}
            />
            <Screen
                name="webview"
                component={WebViewScreen}
            />
            <Screen
                name="loaded"
                component={LoadedScreen}
            />
        </Navigator>
    )
}
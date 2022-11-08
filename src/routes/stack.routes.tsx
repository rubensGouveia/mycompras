import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BarCodeScreen } from '@screens/BarCodeScreen'
import { HomeScreen } from '@screens/HomeScreen'
import { LoadedScreen, NewPage } from '@screens/LoadedScreen'
import { WebViewScreen } from '@screens/WebViewScreen'
import screenConfig from '@utils/screenConfig'

const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator screenOptions={screenConfig()}>
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
                options={{ title: "Nova Compra", headerShown: true, headerStyle: { backgroundColor: '#f0efef', }, headerShadowVisible: false }}
            />
        </Navigator>
    )
}

import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { api } from '@config/api';
import { useNavigation } from '@react-navigation/native';

export function BarCodeScreen() {
  const navigation = useNavigation()

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);


  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ data, type }: BarCodeEvent) => {


    setScanned(true);
    if (data.includes('qrcode')) {
      const token = data.replace(/http:\/\/www\.fazenda\.df\.gov\.br\/nfce\/qrcode\?p=/, '')
      api.get(`qrcode/${token}`).then(json => navigation.navigate('loaded', { data: JSON.stringify(json.data) })).catch(err => console.log('err', err))
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    } else {
      await Clipboard.setStringAsync(data.split('p=')[1]);
      navigation.navigate('webview')
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

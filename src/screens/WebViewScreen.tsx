
import React from 'react';
import { StyleSheet, } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { api } from '@config/api';
import { useNavigation } from '@react-navigation/native';

export function WebViewScreen() {
  const navigation = useNavigation()
  async function handleWebViewNavigationStateChange(newNavState: WebViewNavigation) {
    const { url, navigationType } = newNavState;

    if (!url) return;
    if (url.includes('token') && !navigationType) {
      api.get(`pcode/${url.split('Visualiza/')[1].trim()}`).then(json => navigation.navigate('loaded', { data: JSON.stringify(json.data) })).catch(err => console.log('err', err))
    }
  };

  return (
    <WebView
      style={styles.container}
      source={{ uri: 'http://www.fazenda.df.gov.br/nfce/consulta' }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
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


import React from 'react';
import { StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { api } from '../config/api';

export function WebViewScreen({navigation}) {
 
  async function handleWebViewNavigationStateChange  (newNavState){
    
    const { url, navigationType } = newNavState;

    if (!url) return;
    if(url.includes('token') && !navigationType){
        api.get(`pcode/${url.split('Visualiza/')[1].trim()}`).then(json=> console.log('json', json.data)).catch(err=> console.log('err',err))
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
  
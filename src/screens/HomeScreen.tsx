
import { Balance } from '@components/Balance';
import { LastPurchases } from '@components/LastPurchases';
import { Loading } from '@components/Loading';
import { ScreenContainer } from '@components/ScreenContainer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export function HomeScreen() {
  const navigation = useNavigation()

  return (
    <ScreenContainer >
      <Balance />
      <LastPurchases />

      <Button title='scanner' onPress={() => navigation.navigate('barcode')} />
    </ScreenContainer>
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


import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ICompra } from 'src/@types/compras';
import { ScreenContainer } from '@components/ScreenContainer';
import { Product } from '@components/Procuct';

type RouteParams = {
  data: string
}


export function LoadedScreen() {

  const navigation = useNavigation()
  const route = useRoute()
  const { data } = route.params as RouteParams

  const compra: ICompra = JSON.parse(data)

  return (
    <ScreenContainer>
      <ScrollView >
        <View style={styles.container}>
          <Text>{compra?.estabelecimento}</Text>
          {compra?.produtos?.map(produto => (
            <Product key={produto?.nome} product={produto} />
          ))}
          <Text>{compra?.valorCompra}</Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16
  },

});

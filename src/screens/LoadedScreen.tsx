
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ICompra } from 'src/@types/compras';
import { ScreenContainer } from '@components/ScreenContainer';
import { Product } from '@components/Procuct';
import { PurchaseHeader } from '@components/PurchaseHeader';
import { Container, Row } from '@components/Purchase/styles';
import { Card } from '@components/Card';

type RouteParams = {
  data: string
}


export function LoadedScreen() {

  const navigation = useNavigation()
  const route = useRoute()
  const { data } = route.params as RouteParams

  const compra: ICompra = JSON.parse(data)

  function cardTitle() {
    const length = compra.produtos.length
    const prod = length === 1 ? 'Produto' : 'Produtos'

    return `${prod} (${length})`
  }

  return (

    <ScrollView horizontal={false} style={{ padding: 16 }}>
      <Container>
        <Row>

          <PurchaseHeader compra={compra} />
          <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <Text>></Text>
          </View>
        </Row>
      </Container>
      <View style={styles.container}>
        <Card title={cardTitle()} bgColor="rgba(0,0,0,0)" padding={0}>

          {compra?.produtos?.map(produto => (
            <Product key={produto?.nome} product={produto} />
          ))}
        </Card>

      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  },

});

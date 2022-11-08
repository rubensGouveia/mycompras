
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Product } from '@components/Procuct';
import { PurchaseHeader } from '@components/PurchaseHeader';
import { Container, Row } from '@components/Purchase/styles';
import { Card } from '@components/Card';
import { ArrowRight } from '@assets/svg/ArrowRight';
import { TouchableOpacity, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { ICompra } from '@types/compras';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type RouteParams = {
  data: string
}


export function LoadedScreen() {

  const navigation = useNavigation()
  const route = useRoute()
  const [show, setShow] = useState(false)
  const { data } = route.params as RouteParams

  const compra: ICompra = JSON.parse(data)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
          <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => setShow(true)} style={{ backgroundColor: 'red', padding: 8 }}>

              <ArrowRight />
            </TouchableOpacity>
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
      <BottomSheet
        ref={bottomSheetRef}
        // index={1}
        enablePanDownToClose={true}
        snapPoints={snapPoints}

      // onChange={handleSheetChanges}
      >

        <BottomSheetView >
          <Text>Awesome</Text>
        </BottomSheetView>
      </BottomSheet>
    </ScrollView >

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

  }, contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

});

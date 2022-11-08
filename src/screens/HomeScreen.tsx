
import { Balance } from '@components/Balance';
import { LastPurchases } from '@components/LastPurchases';
import { Loading } from '@components/Loading';
import { ScreenContainer } from '@components/ScreenContainer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { api } from '@config/api';
import { MonthSelector } from '@components/MonthSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IGetHome } from 'src/types/compras';

export function HomeScreen() {
  const navigation = useNavigation()
  const [purchases, setPurchases] = useState<IGetHome>({} as IGetHome)
  const [month, setMonth] = useState(0)
  useEffect(() => {
    api.get('/', {
      params: {
        index: month
      }
    }).then(res => setPurchases(res.data)).catch(err => console.log('err', err))
  }, [month])

  const consumed = purchases?.compras?.reduce((acc, current) => {
    return current.valorCompra + acc
  }, 0)
  return (
    <ScreenContainer >
      <MonthSelector index={month} setIndex={setMonth} />
      <Balance budget={purchases.orcamento?.valor} consumed={consumed} />
      <LastPurchases purchases={purchases?.compras} />

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

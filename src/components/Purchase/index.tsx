import { PurchaseHeader } from '@components/PurchaseHeader';
import { formatCurrency } from '@utils/formatCurrency';
import { formatDate } from '@utils/formatDate';
import { Text, View } from 'react-native';
import { ICompra } from 'src/types/compras';
import { BlockCurrency, Container, Row } from './styles'


interface IProps {
    compra: ICompra
}

export const Purchase = ({ compra }: IProps) => {
    const valor = formatCurrency(compra?.valorCompra)
    const big = valor.substring(valor.length - 3, 0)
    const small = valor.substring(valor.length, valor.length - 3)

    return (
        <Container>
            <Row>
                <PurchaseHeader compra={compra} />
                <BlockCurrency >
                    <View style={{ flexDirection: 'row', alignItems: "flex-start" }} >

                        <Text style={{ fontSize: 16, fontWeight: '700' }}>{big}</Text>
                        <Text style={{ fontSize: 10, fontWeight: '700', paddingTop: 1 }}>{small}</Text>
                    </View>
                </BlockCurrency>
            </Row>

        </Container>
    );
}


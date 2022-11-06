import { formatCurrency } from '@utils/formatCurrency';
import { formatDate } from '@utils/formatDate';
import { Text, View } from 'react-native';
import { ICompra } from 'src/@types/compras';
import { Block, BlockCurrency, Container, Row } from './styles'


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
                <Block>
                    <Text style={{ fontSize: 10 }}>{compra?.created_at && formatDate(new Date(compra?.created_at), 'dd/MM/yyyy - HH:mm')}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 6 }} numberOfLines={1} ellipsizeMode='tail' >{compra.estabelecimento}</Text>
                    <Text style={{ fontSize: 13 }} numberOfLines={1} ellipsizeMode='tail'>{compra?.endereco}</Text>
                </Block>
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


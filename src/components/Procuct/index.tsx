import { Text } from 'react-native';
import { IProduto } from 'src/@types/compras';
import { Block, Container, Row } from './styles'

interface IProps {
    product: IProduto
}

export function Product({ product }: IProps) {

    return (
        <Container>
            <Block>
                <Text>{product?.nome}</Text>
            </Block>
            <Row>
                <Block >
                    <Text style={{ fontWeight: '700' }}>V.Unit.:</Text>
                    <Text>{product?.valorUnitario}</Text>
                </Block>
                <Block >
                    <Text style={{ fontWeight: '700' }}>Quant.:</Text>
                    <Text>{product?.quantidade}</Text>
                </Block>
                <Block >
                    <Text style={{ fontWeight: '700' }}>V. Total:</Text>
                    <Text>{product?.valorTotal}</Text>
                </Block>
            </Row>

        </Container>
    );
}


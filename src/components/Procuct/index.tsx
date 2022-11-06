import { formatCurrency } from '@utils/formatCurrency';
import { Text } from 'react-native';
import { IProduto } from 'src/@types/compras';
import { Action, Block, Container, Info, Row } from './styles'

interface IProps {
    product: IProduto
}

export const Product = ({ product }: IProps) => {

    return (
        <Container>
            <Row>
                <Block >
                    <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 6 }} numberOfLines={1} ellipsizeMode='tail' >{product?.nome}</Text>
                    <Block >
                        <Row>
                            <Info >
                                <Text>Quant.: {product?.quantidade}</Text>
                            </Info>
                            <Info >
                                <Text>UN.: {product?.unidadeMedida}</Text>
                            </Info>


                        </Row>
                        <Row>
                            <Info >
                                <Text>Vl. Unit.: {formatCurrency(product?.valorUnitario, false)}</Text>
                            </Info>
                            <Info >
                                <Text>Vl. Total: {formatCurrency(product?.valorTotal, false)}</Text>
                            </Info>


                        </Row>
                    </Block>
                </Block>
                <Action>

                    <Text>></Text>
                </Action>

            </Row>

        </Container>
    );
}


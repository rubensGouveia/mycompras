
import { formatDate } from '@utils/formatDate';
import { Text } from 'react-native';
import { ICompra } from 'src/@types/compras';
import { Block } from './styles'
interface IProps {
    compra: ICompra
}

export const PurchaseHeader = ({ compra }: IProps) => {
    return (
        <Block>
            <Text style={{ fontSize: 10 }}>{compra?.created_at && formatDate(new Date(compra?.created_at), 'dd/MM/yyyy - HH:mm')}</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 6 }} numberOfLines={1} ellipsizeMode='tail' >{compra.estabelecimento}</Text>
            <Text style={{ fontSize: 13 }} numberOfLines={1} ellipsizeMode='tail'>{compra?.endereco}</Text>
        </Block>

    );
}


import { Card } from '@components/Card';
import { ICompra } from 'src/types/compras';
import { Purchase } from '@components/Purchase';

interface Props {
    purchases: ICompra[]
}

export const LastPurchases = ({ purchases }: Props) => {

    return (
        <Card title="Últimas compras" buttonType="see" bgColor='rgba(254,0,0,0)' padding={0}>
            {purchases?.map((p) => (
                <Purchase key={p.id} compra={p} />
            ))}
        </Card>
    )
}
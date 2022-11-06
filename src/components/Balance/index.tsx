import { Text } from 'react-native'
import { ProgressText, ProgressWrapper, Row, End } from './styles'

import { Card } from '@components/Card';
import { ProgressBar } from '@components/ProgressBar';
import { Coins } from '../../assets/svg/Coins';
import { More } from '../../assets/svg/More';

interface Props {
    budget: number
    consumed: number
}
export const Balance = ({ budget = 0, consumed = 0 }: Props) => {
    const rest = budget - consumed
    const percent = consumed ? (rest / budget) : 0
    return (
        <Card title="Seu Saldo">
            <Row>
                <Coins />
                <Text style={{ fontSize: 16, fontWeight: '700' }}> Restam R$ {(rest)?.toFixed(2).replace('.', ',')}</Text>
                <End>
                    <More />
                </End>
            </Row>
            <ProgressWrapper>
                <ProgressText>{percent ? percent.toFixed(2)?.replace('0.', "") : 0}%</ProgressText>
                <ProgressBar progress={percent || 0} width={null} height={20} borderRadius={50} color="linear-gradient(180deg, rgba(252,211,77,1) 0%, rgba(245,158,11,1) 100%)" />
            </ProgressWrapper>
            <Text style={{ fontSize: 13, fontWeight: '400', opacity: 0.9 }}>Previsto R$ {budget?.toFixed(2).replace('.', ',')} x Realizado R$ {consumed?.toFixed(2).replace('.', ',')}</Text>
        </Card>
    )
}
import { Text } from 'react-native'
import { ProgressText, ProgressWrapper } from './styles'
import * as Progress from 'react-native-progress';
import { Card } from '@components/Card';

export const Balance = () => {

    return (
        <Card title="Seu Saldo" buttonType="edit">
            <Text>Restam R$ 25,00</Text>
            <ProgressWrapper>
                <ProgressText>30%</ProgressText>
                <Progress.Bar progress={0.3} width={null} height={20} style={{ borderRadius: 50 }} />
            </ProgressWrapper>
            <Text>Previsto R$ 800,00 x Realizado R$ 512,14</Text>
        </Card>
    )
}
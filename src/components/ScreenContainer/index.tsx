
import { Loading } from '@components/Loading'
import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

const Container = styled(SafeAreaView)`
flex: 1;
align-items: center;
justify-content: flex-start;
padding: 16px;
`
interface Props {
    loading?: boolean
    children: ReactNode
}

export const ScreenContainer = ({ children, loading = false }: Props) => {

    return (
        <>
            {loading && <Loading />}
            <Container>
                {children}
            </Container>
        </>
    )

}
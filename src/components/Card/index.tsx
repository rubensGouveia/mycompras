import { Text } from 'react-native'
import { Container, Row, Wrapper } from './styles'

import { ReactNode } from 'react';

interface Props {
    title: string
    buttonType?: "add" | "edit" | "see"
    bgColor?: string
    children: ReactNode
    padding?: number
}
export const Card = ({ children, buttonType, title, bgColor = '#fff', padding = 16 }: Props) => {
    return (
        <Container>
            <Row>
                <Text>{title}</Text>
                {buttonType && (<Text>{buttonType}</Text>)}
            </Row>
            <Wrapper bgColor={bgColor} style={{ padding }}>
                {children}
            </Wrapper>
        </Container>
    )
}
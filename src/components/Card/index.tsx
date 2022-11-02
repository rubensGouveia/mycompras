import { Text } from 'react-native'
import { Container, Row, Wrapper } from './styles'

import { ReactNode } from 'react';

interface Props {
    title: string
    buttonType: "add" | "edit"
    children: ReactNode
}
export const Card = ({ children, buttonType, title }: Props) => {
    return (
        <Container>
            <Row>
                <Text>{title}</Text>
                <Text>{buttonType}</Text>
            </Row>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}
import { View, ViewProps } from 'react-native'

import styled from 'styled-components/native'
interface WrapperProps extends ViewProps{
    bgColor:string
    
}

export const Container = styled.View`
width:100%;
margin-bottom:24px;
`
export const Wrapper = styled(View)<WrapperProps>`

margin-top: 8px; 
background-color: ${({bgColor})=>bgColor};
width:100%;
border-radius: 10px;
`

export const Row = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 4px 8px;
`



import { ViewProps } from 'react-native'
import styled from 'styled-components/native'
interface Wp extends ViewProps{
    bg?:string
}

export const Container = styled.View`
padding: 0 16px;
margin-bottom: 8px; 
width:100%;
background-color: #fff;
border-radius: 10px;
`
export const Block = styled.View`
padding: 8px;
flex: 1;
`
export const Action = styled.View`
align-items:center;
justify-content:center;
flex: 0.05;
`
export const Info = styled.View<Wp>`
padding: 4px 0px;
flex: 1;
background-color: ${({bg})=>bg? bg: 'rgba(0,0,0,0)'};

`
export const Row = styled.View`
flex-direction: row;
justify-content: space-between;
`



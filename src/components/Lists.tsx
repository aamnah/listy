import React from 'react'

import { Text } from 'react-native'
import styled from 'styled-components/native'

import { Color, Dimension } from 'Theme'

interface Props {
  data: any
  style?: {}
}

export default function Lists({ data, style, ...rest }: Props) {
  return (
    <>
      <Header>
        <Text>Lists</Text>
      </Header>
      <Body style={style} {...rest}>
        {data.map((list) => (
          <Item kye={list.id}>
            <Title>{list.title}</Title>
            <Description>3 items</Description>
          </Item>
        ))}
      </Body>
    </>
  )
}

const Header = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  color: red;
  background: powderblue;
`

const Body = styled.View`
  margin-top: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: wheat;
`

const Title = styled.Text`
  font-family: 'Graphik-Bold';
  font-size: 18px;
`
const Description = styled.Text``

const Item = styled.View`
  background-color: ${Color.faded};
  border-radius: ${Dimension.borderRadius}px;
  padding: 16px;
  margin-bottom: 16px;
  elevation: 1;
  width: ${(Dimension.wrapperWidth - 16) / 2}px;
`

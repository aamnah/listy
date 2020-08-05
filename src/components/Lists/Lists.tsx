import React from 'react'

import { Pressable, Text, View } from 'react-native'
import styled from 'styled-components/native'

import { Icon } from 'components/common'
import { Color, Dimension } from 'Theme'

import * as Type from './Lists.types'
import { useListsContext, ListsProvider } from './ListsContext'

export function Lists(props: any): JSX.Element {
  const data: Type.Lists = useListsContext()

  return (
    <ListsProvider>
      <View {...props}>
        <Header>
          <HeaderTitle>Lists</HeaderTitle>
          {/* <HeaderRight>
            <Icon name="plus" />
          </HeaderRight> */}
        </Header>
        <Body>
          {data.map((list: Type.List) => (
            <Item key={list.id} onPress={() => console.warn('pressed list')}>
              <Title>{list.title}</Title>
              <Description>3 items</Description>
            </Item>
          ))}
          <Item onPress={() => console.warn('make new list')}>
            <AddNew>
              <Icon name="plus" fill={Color.muted} />
            </AddNew>
          </Item>
        </Body>
      </View>
    </ListsProvider>
  )
}

const Header = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* background: ${__DEV__ ? 'powderblue' : 'transparent'}; */
`

const HeaderTitle = styled.Text`
  font-family: 'Graphik-Medium';
  font-size: 20px;
  margin-top: 16px;
`

const HeaderRight = styled.View`
  background: plum;
  padding: 16px;
`

const Body = styled.View`
  margin-top: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: ${__DEV__ ? 'wheat' : 'transparent'}; */
`

const Title = styled.Text`
  font-family: 'Graphik-Bold';
  font-size: 16px;
`
const Description = styled.Text``

const Item = styled(Pressable)`
  background-color: white;
  border-radius: ${Dimension.borderRadius}px;
  padding: 16px;
  margin-bottom: 16px;
  elevation: 1;
  width: ${(Dimension.wrapperWidth - 16) / 2}px;
  justify-content: center;
`
const AddNew = styled.View`
  align-items: center;
`

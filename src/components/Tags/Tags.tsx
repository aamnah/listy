import React from 'react'

import { Pressable } from 'react-native'
import styled from 'styled-components/native'

import { Icon } from 'components/common'
import { Color } from 'Theme'

import * as Type from './Tags.types'
import { useTagsContext, TagsProvider } from './TagsContext'

interface TagProps {
  title: string | JSX.Element
  desc?: string
  color?: string
  onPress?: () => void
}

export function Tag({
  title,
  desc,
  color,
  onPress,
  ...rest
}: TagProps): JSX.Element {
  return (
    <StyledTag color={color} onPress={onPress} {...rest}>
      <Title>{title}</Title>
      {desc ? <Description>{desc}</Description> : null}
    </StyledTag>
  )
}

export function Tags(props: any): JSX.Element {
  const data: Type.Tags = useTagsContext()

  return (
    <TagsProvider>
      <Header>
        <HeaderTitle>Tags</HeaderTitle>
        {/* <HeaderRight>
          <Icon name="plus" />
        </HeaderRight> */}
      </Header>
      <Body {...props}>
        {data.map((tag: Type.Tag) => (
          <Tag
            onPress={() => console.warn('clicked tag')}
            key={tag.id}
            title={tag.title}
            desc={tag.description}
            color={tag.color}
          />
        ))}
        <Tag
          onPress={() => console.warn('clicked tag')}
          title={<Icon name="plus" fill={Color.muted} />}
        />
      </Body>
    </TagsProvider>
  )
}

const Header = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* background: salmon; */
`

const HeaderRight = styled.View`
  /* background: plum;
  padding: 16px; */
`

const HeaderTitle = styled.Text`
  font-family: 'Graphik-Medium';
  font-size: 20px;
  margin-top: 16px;
`
const Body = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  /* background: ${__DEV__ ? 'lavender' : 'transparent'}; */
`
const StyledTag = styled(Pressable)<TagProps>`
  border-left-color: ${(props) => (props.color ? props.color : 'white')};
  border-left-width: ${(props) => (props.color ? '16px' : 0)};
  border-radius: 8px;
  background: white;
  padding: 8px 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 1;
  justify-content: center;
`

const Title = styled.Text`
  font-family: 'Graphik-Bold';
  font-size: 16px;
`
const Description = styled.Text``

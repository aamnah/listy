import React from 'react'

import { View } from 'react-native'
import styled from 'styled-components/native'

import { Color } from 'Theme'

interface TagProps {
  title: string
  desc: string
  color: string
}

interface TagsProps {
  data: any
}

export function Tag({ title, desc, color, ...rest }: TagProps) {
  return (
    <StyledTag color={color} {...rest}>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </StyledTag>
  )
}

export default function Tags({ data, ...rest }: TagsProps): JSX.Element {
  return (
    <Container {...rest}>
      {data.map((tag) => (
        <Tag
          key={tag.id}
          title={tag.title}
          desc={tag.description}
          color={tag.color}
        />
      ))}
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  background: lavender;
`
const StyledTag = styled.View<TagProps>`
  border-left-color: ${(props) => (props.color ? props.color : 'white')};
  border-left-width: 16px;
  border-radius: 8px;
  background: white;
  padding: 8px 16px;
  background-color: ${Color.faded};
  margin-right: 16px;
  margin-bottom: 16px;
  elevation: 1;
`

const Title = styled.Text`
  font-family: 'Graphik-Bold';
  font-size: 18px;
`
const Description = styled.Text``

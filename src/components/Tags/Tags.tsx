import React from 'react'

import styled from 'styled-components/native'

import { Color } from 'Theme'

import { useTagsContext, TagsProvider } from './TagsContext'

interface TagProps {
  title: string
  desc: string
  color: string
}

export function Tag({ title, desc, color, ...rest }: TagProps): JSX.Element {
  return (
    <StyledTag color={color} {...rest}>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </StyledTag>
  )
}

export function Tags(props: any): JSX.Element {
  const data = useTagsContext()

  return (
    <TagsProvider>
      <Container {...props}>
        {data.map((tag) => (
          <Tag
            key={tag.id}
            title={tag.title}
            desc={tag.description}
            color={tag.color}
          />
        ))}
      </Container>
    </TagsProvider>
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

import React from 'react'

import styled from 'styled-components/native'

import { Dimension } from 'Theme'

interface Props {
  children: any
  style?: {}
}

export function Wrapper({ children, style, ...rest }: Props) {
  return (
    <StyledView style={style} {...rest}>
      {children}
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  width: ${Dimension.wrapperWidth}px;
  align-self: center;
  /* background: ${__DEV__ ? 'thistle' : 'transparent'}; */
`

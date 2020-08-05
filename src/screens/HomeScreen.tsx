import React from 'react'

import { ScrollView } from 'react-native'

import { Wrapper } from 'components/common/Wrapper'
import Lists from 'components/Lists'
import Tags from 'components/Tags'

export default function HomeScreen() {
  return (
    <ScrollView>
      <Wrapper>
        <Lists />
        <Tags />
      </Wrapper>
    </ScrollView>
  )
}

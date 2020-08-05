import React from 'react'

import { ScrollView } from 'react-native'

import List from 'components/common/List'
import Wrapper from 'components/common/Wrapper'
import Lists from 'components/Lists'
import Tags from 'components/Tags'
import { sampleData } from 'sample-data.ts'

export default function HomeScreen() {
  return (
    <ScrollView>
      <Wrapper>
        <Lists />
        <Tags />
        <List data={sampleData} />
      </Wrapper>
    </ScrollView>
  )
}

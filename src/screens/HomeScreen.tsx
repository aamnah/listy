import React from 'react'

import { ScrollView } from 'react-native'

import List from 'components/common/List'
import Tags from 'components/common/Tags'
import Wrapper from 'components/common/Wrapper'
import Lists from 'components/Lists'
import { sampleData } from 'sample-data.ts'

export default function HomeScreen() {
  return (
    <ScrollView>
      <Wrapper>
        <Lists />
        <Tags data={sampleData.tags} />
        <List data={sampleData} />
      </Wrapper>
    </ScrollView>
  )
}

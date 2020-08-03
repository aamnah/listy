import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar, ScrollView } from 'react-native'

import Wrapper from 'components/common/Wrapper'
import Lists from 'components/Lists'
import Tags from 'components/Tags'
import { data } from 'sample-data.ts'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <Wrapper>
          <Lists data={data.lists} />
          <Tags data={data.tags} />
        </Wrapper>
      </ScrollView>
    </NavigationContainer>
  )
}

export default App

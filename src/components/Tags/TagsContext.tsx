import React, { createContext, useContext, useState } from 'react'

import { sampleData } from 'sample-data'

const TagsContext = createContext(sampleData.tags)
TagsContext.displayName = 'TagsContext'

export function useTagsContext() {
  const context = useContext(TagsContext)

  if (!context)
    throw new Error('useTagsContext must be used within TagsProvider')
  return context
}

export function TagsProvider(props: any) {
  const [data, setData] = useState(sampleData.tags)

  const value = { data, setData }
  return <TagsContext.Provider value={value} {...props} />
}

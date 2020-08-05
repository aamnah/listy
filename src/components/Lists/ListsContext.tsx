import React, { createContext, useContext, useState } from 'react'

import { sampleData } from 'sample-data'

const ListsContext = createContext(sampleData.lists)
ListsContext.displayName = 'ListsContext'

// the hook to use our context and have reducer logic
export function useListsContext() {
  const context = useContext(ListsContext)
  if (!context)
    throw new Error('ListsContext must be used within ListsProvider')
  return context
}

// the provider we'll export
export function ListsProvider(props: any) {
  const [data, setData] = useState(sampleData.lists)

  const value = { data, setData }

  return <ListsContext.Provider value={value} {...props} />
}

/* 
useContext

reads and subscribes to context and changes to it

Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 

const value = useContext(MyContext);

MyContext needs to be the entire context, not MyContext.Consumer or MyContext.Provider

https://reactjs.org/docs/hooks-reference.html#usecontext

Links
---
https://www.youtube.com/watch?v=yzQ_XulhQFw&t=18s
https://leewarrick.com/blog/the-problem-with-context/
*/

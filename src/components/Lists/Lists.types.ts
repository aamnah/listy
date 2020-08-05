export interface List {
  id: number
  title: string
  createdAt: string
}

// array of objects
export interface Lists extends Array<List> {}

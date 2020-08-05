export interface Tag {
  id: number
  color: string
  title: string
  description: string
  createdAt: string
}

// array of objects
export interface Tags extends Array<Tag> {}

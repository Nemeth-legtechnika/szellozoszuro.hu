export type Callout = {
  id: number
  type: 'callout'
  title: string
  content: string
}

export type Heading = {
  id: number
  type: 'heading'
  title: string
  content: string
}

export type Image = {
  id: number
  type: 'image'
  image: string
  caption: string
}

export type Intro = {
  id: number
  type: 'intro'
  content: string
}

export type SectionItem = Callout | Heading | Image | Intro

export type Blog = {
  id: number
  showOnHomePage: boolean
  title: string
  titleDe: string
  excerpt: string
  excerptDe: string
  image: string
  date: string
  authorFirstName: string
  authorLastName: string
  slug: string
  category: string
  categoryDe: string
  readTime: string
  sections: SectionItem[]
}

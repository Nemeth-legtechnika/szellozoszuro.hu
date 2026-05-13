import { SectionItem } from '@/components/blog/blog'
import Callout from '@/components/blog/callout'
import Heading from '@/components/blog/heading'
import Image from '@/components/blog/image'
import Intro from '@/components/blog/intro'

type SectionProps = {
  item: SectionItem
}

const Section = ({ item }: SectionProps) => {
  switch (item.type) {
    case 'callout':
      return <Callout title={item.title} content={item.content} />
    case 'heading':
      return <Heading title={item.title} content={item.content} />
    case 'image':
      return <Image src={item.image} caption={item.caption} />
    case 'intro':
      return <Intro content={item.content} />
    default:
      return item satisfies never
  }
}

export default Section

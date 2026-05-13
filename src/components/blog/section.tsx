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
      return <Callout id={item.id} title={item.title} content={item.content} />
    case 'heading':
      return <Heading id={item.id} title={item.title} content={item.content} />
    case 'image':
      return <Image id={item.id} src={item.image} caption={item.caption} />
    case 'intro':
      return <Intro id={item.id} content={item.content} />
    default:
      return null
  }
}

export default Section

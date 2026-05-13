import blogPosts from '@/assets/data/blogs.json'
import { Blog, Callout, Heading, Image, Intro } from '@/components/blog/blog'
import useImage from '@/hooks/use-image'

type BlogData = (typeof blogPosts)[number]

type UseBlogsProps = {
  filter: (blog: Blog) => boolean
}

const mapBlog = (blog: BlogData, imageSrc: (filename?: string) => string): Blog => {
  const { sections, image, ...rest } = blog

  const mappedSections = sections
    .map((section) => {
      switch (section.type) {
        case 'callout':
          return {
            id: section.id,
            type: section.type,
            title: section.title,
            content: section.content,
          } as Callout
        case 'heading':
          return {
            id: section.id,
            type: section.type,
            title: section.title,
            content: section.content,
          } as Heading
        case 'image':
          return {
            id: section.id,
            type: section.type,
            image: imageSrc(section.image),
            caption: section.caption,
          } as Image
        case 'intro':
          return {
            id: section.id,
            type: section.type,
            content: section.content,
          } as Intro
        default:
          return null
      }
    })
    .filter((section) => section !== null)

  return {
    ...rest,
    image: imageSrc(image),
    sections: mappedSections,
  }
}

const useBlogs = ({ filter }: UseBlogsProps): Blog[] => {
  const { imageSrc } = useImage()
  return blogPosts.map((blog) => mapBlog(blog, imageSrc)).filter((blog) => filter(blog))
}

export default useBlogs

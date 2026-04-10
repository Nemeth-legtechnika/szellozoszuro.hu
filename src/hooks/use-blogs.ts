import blogPosts from '@/assets/data/blogs.json'

type Blog = (typeof blogPosts)[number]

type UseBlogsProps = {
  filter: (blog: Blog) => boolean
}

const useBlogs = ({ filter }: UseBlogsProps): Blog[] => {
  return blogPosts.filter((blog) => filter(blog))
}

export default useBlogs

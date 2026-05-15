import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://szellozoszuro.hu'
const DEFAULT_IMAGE = '/og-default.jpg'

interface SeoMetaProps {
  title: string
  description: string
  url: string
  image?: string
  type?: string
}

const resolveImage = (image: string): string => {
  if (image.startsWith('http')) return image
  return `${BASE_URL}${image.startsWith('/') ? '' : '/'}${image}`
}

const SeoMeta = ({ title, description, url, image, type = 'website' }: SeoMetaProps) => {
  const imageUrl = resolveImage(image ?? DEFAULT_IMAGE)

  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="szellozoszuro.hu" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

export default SeoMeta

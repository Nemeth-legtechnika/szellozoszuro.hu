import placeholder from '@/assets/images/placeholder.jpg'

const images = import.meta.glob('@/assets/images/blog/*', { eager: true, import: 'default' })

const imageSrc = (filename?: string): string => {
  if (!filename) {
    return placeholder
  }

  const key = `/src/assets/images/${filename}`
  return (images[key] as string) || placeholder
}

type UseImageResult = {
  imageSrc: (filename?: string) => string
}

const useImage = (): UseImageResult => {
  return {
    imageSrc,
  }
}

export default useImage

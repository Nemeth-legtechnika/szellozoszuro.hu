type ImageProps = {
  id: number
  src: string
  caption: string
}

const Image = ({ id, src, caption }: ImageProps) => (
  <div key={id} className="my-10">
    <img src={src} alt={caption} className="w-full rounded-xl border border-border shadow-md" />
    {caption && <p className="mt-3 text-sm text-muted-foreground text-center italic">{caption}</p>}
  </div>
)

export default Image

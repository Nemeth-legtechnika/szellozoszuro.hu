type HeadingProps = {
  title: string
  content: string
}

const Heading = ({ title, content }: HeadingProps) => (
  <div className="mb-8">
    <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">{title}</h2>
    <p className="text-muted-foreground leading-relaxed">{content}</p>
  </div>
)

export default Heading

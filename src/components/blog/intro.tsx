type IntroProps = {
  id: number
  content: string
}

const Intro = ({ id, content }: IntroProps) => (
  <p key={id} className="text-lg text-foreground leading-relaxed mb-8">
    {content}
  </p>
)

export default Intro

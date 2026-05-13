type IntroProps = {
  content: string
}

const Intro = ({ content }: IntroProps) => (
  <p className="text-lg text-foreground leading-relaxed mb-8">{content}</p>
)

export default Intro

type CalloutProps = {
  title: string
  content: string
}

const Callout = ({ title, content }: CalloutProps) => (
  <div className="mt-10 p-6 rounded-xl bg-cyan/10 border-l-4 border-cyan">
    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
      <span className="text-cyan">💡</span>
      {title}
    </h3>
    <p className="text-foreground font-medium">{content}</p>
  </div>
)

export default Callout

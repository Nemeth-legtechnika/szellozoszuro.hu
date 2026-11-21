// Linkify translated document text without changing the owner's wording.
const linkPattern =
  /(https:\/\/[^\s)]+|[\w.+-]+@[\w.-]+\.[a-z]{2,}|\+\d{2} \d{1,2} \d{3} \d{4}|(?:[a-z0-9-]+\.)+(?:hu|eu))/g

const PrivacyText = ({ text }: { text: string }) => (
  <>
    {text.split(linkPattern).map((part, index) => {
      const isLink = /^(https:\/\/|\+|[\w.+-]+@)/.test(part) || /\.(hu|eu)$/.test(part)
      if (!isLink) return part
      const href = part.startsWith('+')
        ? `tel:${part.replace(/\s/g, '')}`
        : part.includes('@')
          ? `mailto:${part}`
          : part.startsWith('https://')
            ? part
            : `https://${part}`
      return (
        <a
          key={`${index}-${part}`}
          href={href}
          className="break-words text-cyan underline underline-offset-4 hover:text-foreground"
        >
          {part}
        </a>
      )
    })}
  </>
)

export default PrivacyText

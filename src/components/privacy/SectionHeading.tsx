const SectionHeading = ({ title, subsection = false }: { title: string; subsection?: boolean }) => {
  const Heading = subsection ? 'h3' : 'h2'
  return (
    <Heading
      className={
        subsection ? 'text-lg font-semibold text-foreground' : 'text-2xl font-bold text-foreground'
      }
    >
      {title}
    </Heading>
  )
}

export default SectionHeading

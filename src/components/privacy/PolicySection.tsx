import KeyValueTable from '@/components/privacy/KeyValueTable'
import NaihBox from '@/components/privacy/NaihBox'
import PrivacyText from '@/components/privacy/PrivacyText'
import ProcessorTable from '@/components/privacy/ProcessorTable'
import SectionHeading from '@/components/privacy/SectionHeading'

export type PolicySectionData = {
  title: string
  paragraphs?: string[]
  rows?: string[][]
  processors?: string[][]
  subsections?: Record<string, PolicySectionData>
  rights?: string[][]
  authority?: boolean
  after?: string[]
}

// Shared document pieces preserve the same structure in both language versions.
const PolicySection = ({
  data,
  subsection = false,
}: {
  data: PolicySectionData
  subsection?: boolean
}) => (
  <section className="min-w-0 space-y-5">
    <SectionHeading title={data.title} subsection={subsection} />
    {data.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="leading-relaxed text-muted-foreground">
        <PrivacyText text={paragraph} />
      </p>
    ))}
    {data.rows && <KeyValueTable rows={data.rows} label={data.title} />}
    {data.processors && <ProcessorTable rows={data.processors} label={data.title} />}
    {data.subsections &&
      Object.entries(data.subsections).map(([key, section]) => (
        <PolicySection key={key} data={section} subsection />
      ))}
    {data.rights && (
      <ul className="list-disc space-y-3 pl-5 text-muted-foreground">
        {data.rights.map(([title, description]) => (
          <li key={title}>
            <strong className="font-semibold text-foreground">{title}</strong>
            {description}
          </li>
        ))}
      </ul>
    )}
    {data.authority && <NaihBox />}
    {data.after?.map((paragraph) => (
      <p key={paragraph} className="leading-relaxed text-muted-foreground">
        <PrivacyText text={paragraph} />
      </p>
    ))}
  </section>
)

export default PolicySection

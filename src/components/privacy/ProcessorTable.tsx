import { useTranslation } from 'react-i18next'

import PrivacyText from '@/components/privacy/PrivacyText'

const ProcessorTable = ({ rows, label }: { rows: string[][]; label: string }) => {
  const { t } = useTranslation()
  const headers = t('privacy.processorHeaders', { returnObjects: true }) as unknown as string[]
  return (
    <div
      className="max-w-full overflow-x-auto rounded-lg border border-border"
      tabIndex={0}
      role="region"
      aria-label={label}
    >
      <table className="w-full min-w-[640px] table-fixed text-left text-sm leading-relaxed">
        <thead className="bg-secondary/50 text-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="p-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-border">
              {row.map((cell) => (
                <td key={cell} className="break-words p-4 align-top text-muted-foreground">
                  <PrivacyText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProcessorTable

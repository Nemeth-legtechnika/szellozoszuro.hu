import PrivacyText from '@/components/privacy/PrivacyText'

const KeyValueTable = ({ rows, label }: { rows: string[][]; label: string }) => (
  <div className="max-w-full overflow-x-auto rounded-lg border border-border">
    <table className="w-full table-fixed text-left text-sm leading-relaxed" aria-label={label}>
      <tbody>
        {rows.map(([key, value]) => (
          <tr key={key} className="border-b border-border last:border-0">
            <th
              scope="row"
              className="w-[34%] break-words bg-secondary/50 p-3 align-top font-semibold text-foreground sm:p-4"
            >
              {key}
            </th>
            <td className="break-words p-3 align-top text-muted-foreground sm:p-4">
              <PrivacyText text={value ?? ''} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default KeyValueTable

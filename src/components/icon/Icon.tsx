import { cn } from '@/lib/utils'

interface IconProps {
  path: string
  className?: string
  bgClassName?: string
}

const Icon = ({ path, className, bgClassName }: IconProps) => {
  const svg = (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-6', className)}
    >
      <path d={path} />
    </svg>
  )

  if (!bgClassName) return svg

  return (
    <div
      className={cn(
        'size-12 flex-shrink-0 rounded-full flex items-center justify-center',
        bgClassName,
      )}
    >
      {svg}
    </div>
  )
}

export default Icon

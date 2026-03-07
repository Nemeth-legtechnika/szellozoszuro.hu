import { siFacebook } from 'simple-icons'

import Icon from '@/components/icon/Icon'

interface FacebookProps {
  className?: string
  bgClassName?: string
}

const Facebook = ({
  className = 'size-8 fill-white',
  bgClassName = 'size-16 bg-[#4268B3]',
}: FacebookProps) => <Icon path={siFacebook.path} className={className} bgClassName={bgClassName} />

export default Facebook

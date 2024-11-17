import { Page } from "@payload-types";
import { Link as IntlLink } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { getLink } from "@/payload/lib/get-link";

type Props = {
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages'
    value: Page | string | number
  } | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}


export const Link: React.FC<Props> = (props) => {
  const {
    children,
    className,
    label,
    newTab,
    url,
  } = props

  const href = getLink(props)

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  return (
    <IntlLink className={cn(className)} href={href || url || ''} {...newTabProps}>
      {label && label}
      {children && children}
    </IntlLink>
  )
}

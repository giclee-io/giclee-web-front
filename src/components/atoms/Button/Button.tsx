import classNames from 'classnames'

export type Props = {
  children: React.ReactNode
  className?: string
  href?: string
  isLink?: boolean
  onClick?: () => void
  type?: 'light' | 'primary' | 'discord' | 'default'
  width?: 'half' | 'default'
} & ({ href: string; isLink: true } | { isLink?: false })

const Button: React.FC<Props> = ({ children, className, href, isLink, onClick, type, width }) => {
  let classes = classNames(className, 'h-10', 'rounded', 'text-center', 'font-bold', 'leading-10')

  classes = width === 'half' ? classNames(classes, 'w-32') : classNames(classes, 'w-64')
  switch (type) {
    case 'light':
      classes = classNames(classes, 'bg-white', 'text-base')
      break
    case 'primary':
      classes = classNames(classes, 'bg-primary', 'text-base')
      break
    case 'discord':
      classes = classNames(classes, 'bg-discord')
      break
    default:
      classes = classNames(classes, 'bg-stone-800')
  }

  return isLink ? (
    <a className={`inline-block ${classes}`} href={href}>
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

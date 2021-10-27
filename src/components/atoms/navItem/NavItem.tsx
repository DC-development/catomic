interface Props {
  linkText: string
  url?: string
}

export const NavItem = (props: React.PropsWithChildren<Props>) => {
  const { linkText, url } = props
  return (
    <li className="navigation-list__item">
      <a href={url}>{linkText}</a>
      {props.children}
    </li>
  )
}

import './Navigation.scss'
import { NavItem } from '../../atoms/navItem/NavItem'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <input className="drop-toggle" type="checkbox" />
      <ul className="navigation-list">
        <NavItem url="#" linkText="NavLink" />
        <NavItem url="#" linkText="NavLink">
          <ul className="navigation-flyout-list">
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
          </ul>
        </NavItem>
        <NavItem url="#" linkText="NavLink">
          <ul className="navigation-flyout-list">
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
          </ul>
        </NavItem>
        <li>
          <a href="#/">link</a>
          <ul className="navigation-flyout-list">
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
            <NavItem url="#" linkText="SubNavLink" />
          </ul>
        </li>
      </ul>
    </nav>
  )
}

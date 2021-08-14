import './Navigation.scss'

export const Navigation = () => {
  return (
      <nav className="navigation navigation--fixed">
      <span className="drop-toggle">
        <input className="drop-toggle__checkbox" type="checkbox" />
      </span>
        <ul className="navigation__top-level">
          <li className="navigation__top-level__item">
            <a href="#/">Link</a>
          </li>
          <li className="navigation__top-level__item navigation__top-level__item--dropdown">
            <a href="#/">Link</a>
            <ul className="navigation__second-level">
              <li className="navigation__second-level__item">
                <a href="#/">sub navlink</a>
              </li>
              <li>
                <a href="#/">sub navlink</a>
              </li>
              <li>
                <a href="#/">sub navlink</a>
              </li>
            </ul>
          </li>
          <li className="navigation__top-level__item">
            <a href="#/">Link</a>
          </li>
          <li className="navigation__top-level__item">
            <a href="#/">Link</a>
          </li>
        </ul>
      </nav>
  )
}

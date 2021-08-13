import './Navigation.scss'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <input className="drop-toggle" type="checkbox" />
      <ul className="navigation-list">
        <li className="navigation-list__item">
          <a href="#/">link</a>
        </li>
        <li>
          <a href="#/">link</a>
          <ul className="navigation-flyout-list">
            <li>
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
        <li>
          <a href="#/">link</a>
          <ul className="navigation-flyout-list">
            <li>
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
        <li>
          <a href="#/">link</a>
          <ul className="navigation-flyout-list">
            <li>
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
      </ul>
    </nav>
  )
}

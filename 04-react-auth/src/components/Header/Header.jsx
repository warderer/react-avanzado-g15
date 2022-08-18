import './Header.scss'

function Header() {
  return (
    <nav className="header">
      <a href="/" className="header__logo">LOGO</a>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <a href="/" className="header__item-link header__item-link--is-active">Home</a>
        </li>
        <li className="header__list-item">
          <a href="/login" className="header__item-link">Login</a>
        </li>
        <li className="header__list-item">
          <a href="/register" className="header__item-link">Register</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
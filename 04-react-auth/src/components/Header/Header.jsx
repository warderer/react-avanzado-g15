import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header__logo">LOGO</Link>
      <ul className="header__nav-list">
        <li className="header__list-item">
          <Link to="/" className="header__item-link header__item-link--is-active">Home</Link>
        </li>
        <li className="header__list-item">
          <Link to="/login" className="header__item-link">Login</Link>
        </li>
        <li className="header__list-item">
          <Link to="/register" className="header__item-link">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
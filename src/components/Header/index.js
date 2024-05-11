import {Link} from 'react-router-dom'

const Header = () => (
  <div className="wave-app-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="logo"
      />
      <h1 className="head">Wave</h1>
    </div>

    <ul>
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

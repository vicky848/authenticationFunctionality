// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="container">
    <ul className="list-container">
      <li className="nav-item-container">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item-container">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

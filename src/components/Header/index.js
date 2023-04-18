import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <ul className="ul-container">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header

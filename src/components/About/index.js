import './index.css'
import Header from '../Header'

import LogoutButton from '../LogoutButton'

const About = () => (
  <div>
    <Header />
    <div className="container">
      <h1 className="heading">About Route</h1>
      <LogoutButton />
    </div>
  </div>
)

export default About

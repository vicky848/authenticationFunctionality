// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <h1 className="heading">Home Route</h1>
    </div>
    <LogoutButton />
  </div>
)
export default Home

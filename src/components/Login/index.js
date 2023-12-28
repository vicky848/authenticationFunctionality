import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookiesAndNavigatetoHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30, path: '/'})
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const responseData = await fetch(url, option)
    const fetchedData = await responseData.json()
    if (responseData.ok === true) {
      setCookiesAndNavigatetoHome(fetchedData.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={onClickLogin}>
        Login with sample Creds
      </button>
    </div>
  )
}

export default Login

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const Token = Cookies.get('jwt_token')

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const loginClicked = async () => {
    console.log('Nithin')
    const url = 'https://apis.ccbp.in/login'
    const details = {username: 'rahul', password: 'rahul@2021'}
    const options = {method: 'POST', body: JSON.stringify(details)}
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      onSubmitSuccess(data.jwt_token)
    }
  }
  if (Token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1 className="login-heading">Please login</h1>
      <button type="button" onClick={loginClicked}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login

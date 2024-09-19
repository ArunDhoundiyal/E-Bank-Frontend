import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import './index.css'

const Login = () => {
  const [userInput, setUserInput] = useState({userId: '', userPin: ''})
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const onHandleInput = event => {
    const {name, value} = event.target
    setUserInput(preState => ({
      ...preState,
      [name]: value,
    }))
  }

  const onClickSubmitButton = async event => {
    event.preventDefault()

    const userInputData = {
      user_id: userInput.userId,
      pin: userInput.userPin,
    }
    try {
      const response = await axios.post(
        `https://apis.ccbp.in/ebank/login`,
        userInputData,
      )
      if (response.data && response.data.jwt_token) {
        const jwtToken = response.data.jwt_token
        Cookies.set('jwtToken', jwtToken, {expires: 7, secure: true})
        navigate('/', {replace: true})
      }
    } catch (error) {
      setErrorMsg(error.response.data.error_msg)
    }
  }

  useEffect(() => {
    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken) {
      navigate('/', {replace: true})
    }
  }, [navigate])

  return (
    <div className="login-bg-container">
      <div className="login-card-container">
        <div className="img-logo-login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form className="user-login-container" onSubmit={onClickSubmitButton}>
          <h1 className="welcome-back-heading">Welcome Back!</h1>
          <label className="userId-style" htmlFor="userId">
            User ID :
            <input
              className="input-field"
              name="userId"
              id="userId"
              type="text"
              placeholder="Enter User ID"
              value={userInput.userId}
              onChange={onHandleInput}
            />
          </label>
          <br />
          <label className="userPin-style" htmlFor="userPin">
            PIN :
            <input
              className="input-field"
              name="userPin"
              id="userPin"
              type="password"
              placeholder="Enter PIN"
              value={userInput.userPin}
              onChange={onHandleInput}
            />
          </label>
          <br />
          <div className="login-button-container">
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
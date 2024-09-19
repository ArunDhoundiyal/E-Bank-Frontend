import {Navigate, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwtToken')
  const navigate = useNavigate()
  const onClickLogoutButton = () => {
    Cookies.remove('jwtToken')
    navigate('/ebank/login', {replace: true})
  }

  if (!jwtToken) {
    return <Navigate to="/ebank/login" replace />
  }

  return (
    <div className="home-bg-container">
      <div className="home-header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="bank-logo-img"
        />
        <button
          className="logout-button"
          type="button"
          onClick={onClickLogoutButton}
        >
          Logout
        </button>
      </div>
      <div className="digital-card-container">
        <h1 className="digital-card-heading">
          Your Flexibility, Our Excellence
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-card-img"
        />
      </div>
    </div>
  )
}

export default Home
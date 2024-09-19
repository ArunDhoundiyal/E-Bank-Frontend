import Cookies from 'js-cookie'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const navigate = useNavigate()

  const onClickBackButton = () => {
    const jwtToken = Cookies.get('jwtToken')
    if (!jwtToken) {
      navigate('/', {replace: true})
    } else {
      navigate('/ebank/login', {replace: true})
    }
  }

  useEffect(() => {
    onClickBackButton();
  }, [navigate]);

  return (
    <div className="not-found-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="pageNotFound-heading">Page Not Found</h1>
      <p className="not-found-paragraph">
        We are sorry, the page you requested could not found
      </p>
      <button className="back-button" type="button" onClick={onClickBackButton}>
        Back
      </button>
    </div>
  )
}

export default NotFound
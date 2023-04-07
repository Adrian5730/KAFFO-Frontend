import { Link, useParams } from 'react-router-dom'
import './UserContainer.css'
// import { ReactComponent as Logo } from '/src/assets/Logo.svg';
import Login from './Login/Login';
import Register from './Register/Register';

const UserContainer = () => {
  const { login_register } = useParams();

  return (
    <div className='container-login'>
      <div className='info-login'>
        <Link to={'/'}>
          <img className='logo-image' src='/images/Logo.svg' />
        </Link>
        {login_register == "login" ? <Login /> : <Register />}
      </div>
    </div>

  )
}

export default UserContainer
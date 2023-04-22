import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './IconUser.css'
const IconUser = () => {
    return (
        <div className='container-icon-user'>
            <Link to={'/user/login'} className='link-user-login'><AccountCircleIcon id="icon-filter" fontSize="medium" /></Link>
        </div>
    )
}

export default IconUser
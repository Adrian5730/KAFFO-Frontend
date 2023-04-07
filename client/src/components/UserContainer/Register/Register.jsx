import { Link } from 'react-router-dom'
import './Register.css'
const Register = () => {
    return (
        <>
            <h1>Register</h1>
            <div className="container-form-login">
                <form className='form-login' action="/register">
                    <input type="text" placeholder='Nombre' />
                    <input type="text" placeholder='Apellido' />
                    <input type="text" placeholder='Correo electrónico' />
                    <input type="password" placeholder='Contraseña' />
                    <input type="tel" placeholder='Teléfono' />

                    <label className='message'> Ya tenes cuenta?</label>
                    <Link to={'/user/login'} className="link_to link-user"><button className='btn-register'>Logueate</button></Link>
                </form>
            </div>
        </>
    )
}

export default Register
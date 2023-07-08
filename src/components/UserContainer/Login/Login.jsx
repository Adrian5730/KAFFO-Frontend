import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect } from "react";
import axios from "axios";
const Login = () => {
  useEffect(() => {
    axios
      .get("https://backend-kaffo-production-8463.up.railway.app/login/user", { withCredentials: true, credentials : "include" })
      .then((response) => {
        // Aquí puedes acceder a los datos de la sesión en response.data
        console.log(response.data);
        // ...
      })
      .catch((error) => {
        // Manejo de errores
        console.error(error);
      });
  });

  return (
    <>
      <h1>LOGIN</h1>
      <div className="container-form-login">
        <form
          className="form-login"
          action="https://backend-kaffo-production-8463.up.railway.app/login"
          method="POST"
        >
          <ul>
            <li>
              <button className="google-button">
                <FcGoogle className="google-icon" size={50} />
                <span className="google-text">Iniciar sesión con Google</span>
              </button>
            </li>
          </ul>
          <input type="text" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
          <label className="message"> No tenes cuenta?</label>
          <Link to={"/user/register"} className="link_to link-user">
            <button className="btn-register">Registrate</button>
          </Link>
        </form>
      </div>
      <div className="container-btn-login">
        <button className="btn-login">Iniciar Sesión</button>
      </div>
    </>
  );
};

export default Login;

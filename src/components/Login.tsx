import '../App.css'
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";

import axios from '../api/axios'
const LOGIN_URL = 'www.larnu.com/desarrolladores/login';

function Login() {

  const setAuth = useContext(AuthContext);
  // const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccess] = useState(false);

  // focus on input
  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])

  // clear inputs after error message
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    // avoid reloading the page
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
      console.log(JSON.stringify(response?.data));
      //from the backend
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg('No hay respuesta del servidor');
      } else if (errMsg.response?.status === 400) {
        setErrMsg('Error por validación');
      } else if (errMsg.response?.status === 404) {
        setErrMsg('Email o password no coinciden');
      } else {
        setErrMsg('El inicio de sesión falló');
      }
      errRef.current.focus();
    }
  }

  return (

    <div className="Login">
      <div className="main">
        <div className="login-container background-image-login">
          <div className="login-container__top">
            <img className='login__logo' src="src/assets/larnu_logo.png" alt="" />
          </div>
          <div className="login-container__center">
            <div className="login-container__center__left"></div>
            <div className="login-container__card">
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
              <h3 className='login-title'>Hola, terrícola</h3>
              <form onSubmit={handleSubmit} className='login-form'>
                <input
                  type="text"
                  name='login-user'
                  id='login-user'
                  // ref={userRef}
                  className='login-user'
                  placeholder='Usuario...'
                  autoComplete='off'
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <input
                  type="password"
                  name='login-password'
                  id='login-password'
                  className='login-password'
                  placeholder='Contraseña...'
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <button className='login-button' type='submit'>Ingresar</button>
              </form>
            </div>
            <div className="login-container__center__right">
              <img className='waving-alien' src="src/assets/waving-alien.svg" alt="waving alien" />
            </div>
          </div>
          <div className="login-container__bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
import './App.css'

function Login() {

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
              <h3 className='login-title'>Hola, terrícola</h3>
              <form action="post" className='login-form'>
                <input type="text" name='login-user' className='login-user' placeholder='Usuario...' required />
                <input type="password" name="login-password" className='login-password' placeholder='Contraseña...' required />
                <button type='submit'>Ingresar</button>
              </form>
            </div>
            <div className="login-container__center__right"></div>
          </div>
          <div className="login-container__bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
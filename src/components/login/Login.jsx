import './Login.css';
import React, { useState } from 'react';
import { useTheme } from '../general/themes/ThemeContext';

function Login() {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para manejar la autenticación
    console.log('Intento de login con:', username, password);
    // Por ejemplo, podrías llamar a authService.login(username, password)
  };

  return (
    <div
      className='loginComponent-modal'
      style={{ background: theme.background }}
    >
      <div class='loginComponent-main'>
        <input
          className='loginComponent-input'
          type='checkbox'
          id='chk'
          aria-hidden='true'
        ></input>

        <div class='loginComponent-signup'>
          <form>
            <label
              className='loginComponent-label'
              for='chk'
              aria-hidden='true'
            >
              Registrarse
            </label>
            <input
              className='loginComponent-input'
              type='text'
              name='txt'
              placeholder='Nombre de usuario'
              required=''
            ></input>
            <input
              className='loginComponent-input'
              type='email'
              name='email'
              placeholder='Correo'
              required=''
            ></input>
            <input
              className='loginComponent-input'
              type='number'
              name='broj'
              placeholder='Teléfono'
              required=''
            ></input>
            <input
              className='loginComponent-input'
              type='password'
              name='pswd'
              placeholder='Contraseña'
              required=''
            ></input>
            <button className='loginComponent-button'>Registrarse</button>
          </form>
        </div>

        <div class='loginComponent-login'>
          <form>
            <label
              className='loginComponent-label'
              for='chk'
              aria-hidden='true'
            >
              Ingresar
            </label>
            <input
              className='loginComponent-input'
              type='email'
              name='email'
              placeholder='Correo'
              required=''
            ></input>
            <input
              className='loginComponent-input'
              type='password'
              name='pswd'
              placeholder='Contraseña'
              required=''
            ></input>
            <button className='loginComponent-button'>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

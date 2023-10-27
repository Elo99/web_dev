import React from 'react'
import { loginEndpoint } from '../../Spotify';
import './login.css';

export default function Login() {
  return (
  <div className='login-page'>
        <img src="https://graph.digiseller.ru/img.ashx?id_d=3666341" 
        alt='logo-spotify' 
        className='logo'/>
        <a href={loginEndpoint}><div className='login-btn'>LOG IN</div></a>

  </div>
  );
}

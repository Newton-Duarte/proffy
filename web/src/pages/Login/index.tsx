import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';

import Input from '../../components/Input';
import api from '../../services/api';

interface ServerResponse {
  success: boolean;
  access_token: string;
}

function Login() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      history.push('/study');
    }
  }, [])
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: FormEvent) {
    e.preventDefault();

    api.post<ServerResponse>('login', {
      email,
      password
    })
      .then(response => {
        const { data } = response;
        const { access_token } = data;
        api.defaults.headers.common['Authorization'] = access_token;
        localStorage.setItem('access_token', access_token);
        history.push('/give-classes');
      })
      .catch(() => alert('Erro no login!'));
  }
  
  return (
    <div id="login-form" className="container">
      <Link to="/">
        <img className="logo" src={logoImg} alt=""/>
      </Link>
      <main>
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>
              Informe seu e-mail e senha
              <div className="loginText">
                Não tem uma conta? <Link to="/register">Registrar</Link>
              </div>
            </legend>

            <Input
              name="email"
              type="email"
              label="Seu melhor email"
              value={email}
              onChange={e => { setEmail(e.target.value) }}
            />
            <Input
              name="password"
              type="password"
              label="Senha secreta"
              value={password}
              onChange={e => { setPassword(e.target.value) }}
            />
          </fieldset>

          <footer>
            <button type="submit">
              Entrar
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default Login;
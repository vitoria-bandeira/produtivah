 
import './login.css';

import { Link } from 'react-router-dom';


function login() {
  return (
    <body>
    <div class="container">
      <div class="logo">
        <Link to={'/'}>
       <img src="logo.png" alt="Logo" />
       </Link>
        <img src="/tomato.png" alt="Tomate" />
      </div>
      <div class="login-box">
        <h1>LOGIN
        </h1>
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email"/>
        <label for="senha">Senha</label>
        <input type="password" id="senha" name="senha"/>
        <button type="button" class="login-btn">Iniciar Sessão</button>
        <a href="#">→ Esqueceu a senha?</a>
        <Link to= '/cadastro'>→ Ainda não tenho uma conta</Link>
      </div>
    </div>
  </body>
    
  );  
  
}

export default login;

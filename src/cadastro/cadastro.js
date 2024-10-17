
import './cadastro.css';

import { Link } from 'react-router-dom';


function cadastro() {
  return (
<body>
  <div class="container">
    <div class="logo">
       <Link to={'/'}>
       <img src="logo.png" alt="Logo" />
       </Link>
      <img src="/tomato.png" alt="Tomate" />
    </div>
    <div class="cadastro-box">
      <h1>CADASTRO
      </h1>
      <label for="email">E-mail</label>
      <input type="text" id="email" name="email"/>
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha"/>
      <label for="senha">Repita sua senha</label>
      <input type="password" id="senha" name="senha"/>
      <button type="button" class="login-btn">Iniciar Sessão</button>
      <Link to= '/Login'>→ Já possuo uma conta</Link>
      
    </div>
  </div>
</body>
  );  
  
}

export default cadastro;

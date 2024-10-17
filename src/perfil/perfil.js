import './perfil.css';
import { Link } from 'react-router-dom';
import React from 'react';
import foto from '../images/perfil.png';

function perfil() {
  return (
<body>
  <div class="container">
    <div class="logo">
        <Link to= '/'>
        <img src="/logo.png" alt="Descrição da imagem" />
        </Link>
    </div>
    <div class="profile">
      <img src={foto} alt="Ícone de Perfil" class="profile-icon" />
      <p class="email">cliente@cliente.com</p>
      <Link to= '/login'><button type="button" class="logout-btn">Sair da conta </button></Link>
    </div>
  </div>
</body>
    
  );  
  
}

export default perfil;

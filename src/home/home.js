 
import './home.css';

import { Link } from 'react-router-dom';


function home() {
  return (
    <body>
  <header class="header">
    <div class="logo">
     <img src="logo.png" alt="Logo" />
      <img src="/tomato.png" alt="Tomate" />
    </div>
  </header>

  <main class="main-content">
    <h1>Bem-vindo ao Produtivah!</h1>
    <p>Gerencie suas tarefas de forma simples e produtiva.</p>
    
    <div class="button">
     <Link to='/cadastro'>
        <button type="button" class="action-btn">Começar 

        </button>
        </Link>
    </div>
  </main>
</body>
    
  );  
  
}

export default home;

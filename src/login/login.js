 
import './login.css';

import { Link } from 'react-router-dom';


function login() {
  return (
      <main className= 'root' >
          <div className='espaço-login'>
          <div className='rectangle1'></div>
          <div className='lOGIN'>LOGIN</div>
          <div className='rectangle2'></div>
          <div className='rectangle3'></div>
          <div className='email'>email</div>
          <div className='senha'>senha</div>
          <div className='criar-conta'>ainda não tenho conta</div>
          <div className='tomato'></div>
        </div>
        <div> <img src='../logo.png' className='logo'></img> </div>
        <div className='logo'> 
       
          <div className='site'>Produtivah</div>
          <div className='emoji-tomato'>
          </div>
        </div>
      </main>
    
  );
  
}

export default login;

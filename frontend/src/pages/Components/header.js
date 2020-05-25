import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assests/logo.svg';
import './styles.css';



export default function Header(){
    const history = useHistory();
    //const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');   

      function handleLogout() {
        localStorage.clear();
    
        history.push('/');
      }

    return(
        <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vinda, <strong>{ongName}</strong></span>
        <div className="menu">
            <a className="menu-item" href="/profile">Home</a>
            <a className="menu-item" href="/detail">Detalhe</a>
            <a className="menu-item" href="/incidents/new">Cadastrar Caso</a>
    
        </div>      
        
        {/* <Link className="button" to="/detail">Detalhe da Ong</Link> */}
        {/* <Link className="button" to="/incidents/new">Cadastrar novo caso</Link> */}
       
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      
      </header>
    );
}
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assests/logo.svg';
import infoImg from '../../assests/info.svg';

export default function Detail(){

    
  const [ongs, setOngs] = useState([]);

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('detail', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setOngs(response.data);
    })
  }, [ongId]);

  
  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }
    return(
        
    <div className="detail-container">            
        <header>
          <img src={logoImg} alt="Be the Hero" />
          <span>Bem vinda, <strong>{ongName}</strong></span>
  
          <Link className="button" to="/profile">Lista de Casos</Link>         
         
          <button onClick={handleLogout} type="button">
            <FiPower size={18} color="#E02041" />
          </button>
        </header>
        
        <div className="content">     
              
            <img src={infoImg} alt="Be the Hero" className="detail-img"/>
            <ul>        
            {ongs.map(ong => (
                    <li >
                        <strong>EMAIL</strong>
                        <p>{ong.email}</p>

                        <strong>TELEFONE:</strong>
                        <p>{ong.whatsapp}</p>
                        </li>                      
                    
                    ))}
            {ongs.map(ong => (
                    <li>
                        <strong>CIDADE:</strong>
                        <p>{ong.city}</p>

                        <strong>UF:</strong>
                        <p>{ong.uf}</p>
                    </li>
                       
                ))}
               
            </ul> 
                                          
        </div>     
      </div>
    );
}
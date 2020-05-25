import React, { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import {FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';
//import logoImg from '../../assests/logo.svg';
import Header from '../Components/header';

export default function Profile() {
  //const [counter, setCounter] = useState();
  const [incidents, setIncidents] = useState([]);

  //const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  //const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }


  // function handleLogout() {
  //   localStorage.clear();

  //   history.push('/');
  // }

  return (
    <div className="profile-container">
     
      <Header/>
      
     
      {incidents.length > 0 ? <h1>Casos cadastrados</h1> : null}   
      {incidents.length > 0 ? (<h3>Quantidade de casos cadastrados: {incidents.length}</h3>) :null } 
     

      <ul>
        {incidents.length > 0 ? (
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </p>

              <button
                onClick={() => handleDeleteIncident(incident.id)}
                type="button">
                <FiTrash2 size={20} />
              </button>
            </li>
          ))
        ) : (
          <h1>Nenhum caso registrado</h1>
        )}
      </ul>
    </div>
  );
}
import React, {useState, useEffect, useRef} from 'react';
import{Link, useHistory} from 'react-router-dom';
import {FiArrowLeft, FiXCircle} from 'react-icons/fi';
import logoImg from '../../assests/logo.svg';
import Modal from 'react-modal';
import lottie from 'lottie-web';
import confirm from '../../assests/confirm.svg';

import api from '../../services/api'
import './styles.css';


export default function Register(){
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

 
  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault(e);

    const data ={
      name,
      email,
      whatsapp,
      city,
      uf
    }

  try{
    const response = await api.post('ongs', data)
    //alert(`Seu ID de Acesso: ${response.data.id}`);
    //history.push('/')
  }
  catch(err){
    alert('Erro no cadastro, tente novamente');
  }
}


const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../assests/success.json')
    })
  }, [])

    return(
       <div className="register-container">
           <div className="content">
               <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link"to="/">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para o logon
                </Link>
               </section>

               <form onSubmit={handleRegister}>
                  <input
                  placeholder="Nomde da Ong"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  />

                  <input
                  type="email"
                   placeholder="Email"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   />

                  <input
                  placeholder="Whatsapp"
                  value={whatsapp}
                  onChange={e => setWhatsapp(e.target.value)}
                  />

                  <div className="input-group">
                    <input
                    placeholder="Cidade"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    />

                    <input
                    placeholder="UF"
                    style={{ width: 80}}
                    value={uf}
                    onChange={e => setUf(e.target.value)}
                    />

                  </div>

                  <button onClick={()=> setModal(true)} className="button" type="submit">
                    Cadastrar
                  </button>


                </form>
                {/* <Modal isOpen={modal} className="modal-register">
                  <h1>Seu cadastro foi realizado com sucesso!!</h1>
                  <h2>O seu id para acesso é: </h2>

                <Link className="back-link" onClick={()=>setModal(false)} to="/">
                    <FiXCircle size={16} color="#E02041"/>
                </Link>
              </Modal> */}

              <Modal className="modal-register" isOpen={modal} >
              <div className="App">             
                <div className="container" ref={container} style={{
                width: '200px',
                height: '200px',
                }}></div>
                </div>
                <img src={confirm} alt="Cadastro Confirmado" 
                style={{
                  width: '350px',
                  height: '350px',
                  position: 'absolute',
                  left: '200px',
                  top: '5px',
                  padding: '10px'
                  
                }}/>
                <p>Seu Cadastro foi realizado com sucesso! Seu ID de acesso é: </p>
                <Link className="back-link" onClick={()=>setModal(false)} to="/">
                    <FiXCircle 
                    size={30} 
                    color="#ffffff"
                    style={{
                     position: 'absolute',
                     left: '650px',
                     top: '30px'
                      }}
                    />
                </Link>
              </Modal>
           </div>

       </div>
    );
}
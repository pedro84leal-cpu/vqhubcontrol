import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../../Mirtilio/blueberry/bb.module.css'
import MenuPrincipal from '../../../Components/Menus/menuPrincipal.jsx';
import { MdSatelliteAlt } from "react-icons/md";
import { GiDandelionFlower } from "react-icons/gi";
import { GiAbstract033 } from "react-icons/gi";
import { IoChevronBack } from "react-icons/io5";
import BBimg from '../../../Images/ImagemEq/blueberry.jpg'


function Blueberry() {
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);
  const [pinoEstado, setPinoEstado] = useState('OFF'); 
  
  const ESP_NAME = "mirtilo-console.local";
  
  const [outputAtivo, setOutputAtivo] = useState(null);
  const handleOutputClick = (numero) => {
    if (outputAtivo === numero) {
      setOutputAtivo(null);
      console.log(`Output ${numero} desativado`);
    } else {
      setOutputAtivo(numero);
      console.log(`Output ${numero} ativado`);
    }
  };

  useEffect(() => {
    testarConexao();
  }, []);
  
  const ativarPino = async (numeroPino) => {
    setLoading(true);
    setMessage(`A ativar pino ${numeroPino}...`);
    
    try {
      const response = await fetch(`http://${ESP_NAME}/ativar`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Accept': 'text/plain' },
      });
      
      if (response.ok) {
        setMessage(`✅ ${await response.text()}`); 
        setPinoEstado('ON');
        setConnected(true);
      } else {
        setMessage(`❌ Erro: ${response.status}`);
      }
    } catch {
      setMessage('⚠️ Erro de conexão');
      setConnected(false);
    } finally {
      setLoading(false);
    }
  };
  
  const desativarPino = async (numeroPino) => {
    setLoading(true);
    setMessage(`A desativar pino ${numeroPino}...`);
    
    try {
      const response = await fetch(`http://${ESP_NAME}/desativar`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Accept': 'text/plain' },
      });
      
      if (response.ok) {
        setMessage(`✅ ${await response.text()}`);  
        setPinoEstado('OFF');
        setConnected(true);
      } else {
        setMessage(`❌ Erro: ${response.status}`);
      }
    } catch {
      setMessage('⚠️ Erro de conexão');
      setConnected(false);
    } finally {
      setLoading(false);
    }
  };
  
  const testarConexao = async () => {
    setMessage('A testar conexão...');
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch(`http://${ESP_NAME}/status`, {
        method: 'GET',
        mode: 'cors',
        signal: controller.signal,
        headers: { 'Accept': 'text/plain' },
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const status = await response.text();
        setMessage('✅ Conectado ! 🔥');
        setPinoEstado(status);
        setConnected(true);
      } else {
        setMessage('❌ Erro: ' + response.status);
        setConnected(false);
      }
    } catch {
      setMessage('⚠️ Falha na conexão');
      setConnected(false);
    }
  };

  
  
  return (
    <>    
      <MenuPrincipal/>

      <div className={styles.bbMenu}>

        <header className={styles.bbTitulo}>
          <h1>
            Teste PU's
          </h1>
          <span className={styles.ledONOFF} >
            {connected ? '🟢' : '🔴'} 
          </span> 
       
        </header>

        <aside>
        <nav className={styles.bbNav}>

          <Link  to="/" className={styles.bbLink}>
            <IoChevronBack  className={styles.bbIcon} />
          </Link>

          <Link to="/blueberry" onClick={(e) => {e.preventDefault();ativarPino(33, "/blueberry");}} className={styles.bbLink}>
            <GiAbstract033 className={styles.bbIcon} />
            <div class={styles.bbTexto}>       
              <span>teste Power unit's</span>
              <small className={styles.bbSmall}>bb plus com 4 output's</small>
              
            </div>
          </Link>

          <Link to="/satelite" onClick={() => desativarPino(33)} className={styles.bbLink} >
            <MdSatelliteAlt className={styles.bbIcon} />
            <div className={styles.bbTexto}>
              <span>teste de satélites</span>
              <small className={styles.bbSmall}>4 - output's externas </small>
            </div>
          </Link>

          <Link to="/eflow" className={styles.bbLink}>  
            <GiDandelionFlower className={styles.bbIcon} />          
            <div className={styles.bbTexto}>
              <span>teste e-flow</span>
            </div>                        
          </Link>
 
        </nav>
        </aside>
      </div>
      <div className={styles.bb2Menu}>

        <nav className={styles.bb2Nav}>

          <button onClick={testarConexao} className={styles.bbBtnConexao} disabled={loading}>
            Verificar Conexão
          </button>
         

          <button className={styles.controlbuttonGreen} onClick={ativarPino} disabled={loading || !connected || pinoEstado === 'ON'}
            style={{ fontSize: '14px', fontFamily: 'monospace' ,
            backgroundColor: pinoEstado === 'ON' ? '#ccc' : '#4CAF50',
            cursor: (loading || !connected || pinoEstado === 'ON') ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            color: 'white'}}>
            {loading ? '...' : 'ON'}
          </button>

          <button className={styles.controlbuttonRed} onClick={() => desativarPino(33)} 
            disabled={loading || !connected || pinoEstado === 'OFF'}
            style={{fontSize: '14px', fontFamily: 'monospace',
            backgroundColor: pinoEstado === 'OFF' ? '#ccc' : '#f44336',
            cursor: (loading || !connected || pinoEstado === 'OFF') ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'white' }}>
            {loading ? '...' : 'OFF'}
          </button>

          {pinoEstado === 'OFF' && (
          <div className={styles.outputs}>

            <button className={styles.btnOutputs} onClick={() => handleOutputClick(1)}
              style={{boxShadow: outputAtivo === 1 ? '0 5px 0 #4CAF50, 0 8px 8px rgba(76, 175, 80, 0.5)' 
                  : '0 5px 0 #8a878783, 0 8px 8px rgb(160, 151, 151)'}}>
                  OUTPUT 1
            </button>

            <button className={styles.btnOutputs} onClick={() => handleOutputClick(2)}
              style={{boxShadow: outputAtivo === 2 ? '0 5px 0 #4CAF50, 0 8px 8px rgb(76, 175, 0.5)'
                : '0 5px 0 #8a878783, 0 8px 8px rgb(160, 151, 151)'}}>
                OUTPUT 2
            </button>

            <button className={styles.btnOutputs} onClick={() => handleOutputClick(3)}
              style={{ boxShadow: outputAtivo === 3 ? '0 5px 0 #4CAF50, 0 8px 8px rgba(76, 175, 80, 0.5)'
                : '0 5px 0 #8a878783, 0 8px 8px rgb(160, 151, 151)'}}>
                OUTPUT 3
            </button>

            <button className={styles.btnOutputs} onClick={() => handleOutputClick(4)}
              style={{ boxShadow: outputAtivo === 4 ? '0 5px 0 #4CAF50, 0 8px 8px rgba(76, 175, 80, 0.5)'
                : '0 5px 0 #8a878783, 0 8px 8px rgb(160, 151, 151)'}}>
                OUTPUT 4
            </button>
          </div>
          )}
        </nav>      
      </div>
      
      <div className={styles.hero}>
          <img src={BBimg} alt='bb'  className={styles.imagem}  />
      </div>  
    </>
  );
}

export default Blueberry;
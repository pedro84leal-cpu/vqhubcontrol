import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './subMenu.module.css'
import BB from '../../Images/BB.png';
import Sat from '../../Images/sate.png';
import Eflow from '../../Images/e-flow.png';
import MenuPrincipal from '../../Components/Menus/menuPrincipal';
import imgSat from '../../Images/satelites.jpg';



function Satelite() {
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);
  const [pinoEstado, setPinoEstado] = useState('OFF'); 
  
  const ESP_NAME = "mirtilo-console.local";
  
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
    <div className={styles.MenuContainer}>
      <MenuPrincipal/>
      <div className={styles.Menu}>
        <header className={styles.MenuTitulo}>
          <h1>
            Mirtilo
          </h1>
          <p>
            Console
          </p>

        </header>
        <aside>
          <nav className={styles.MenuItem}>

            <Link to="/mirtilo-console">
              <img src={BB} className={styles.MenuIcon} alt="BlueBerry"/>

               <div class={styles.textoContainer}>       
                <span>teste power unit's</span>
                <small className={styles.MenuSubtitulo}>blueberry plus com 4 output's</small>
              </div>

            </Link>

            <Link to="/satelite" onClick={() => desativarPino(33)} >
              <img src={Sat} className={styles.MenuIcon} alt="Satélites"/>

              <div className={styles.textoContainer}>
                <span>teste de satélites</span>
                <small className={styles.MenuSubtitulo}>4 - output's externas </small>
              </div>

            </Link>

            <Link to="/eflow">  
              <img src={Eflow} className={styles.MenuIcon} alt="e-Flow"/>
           
              <div className={styles.textoContainer}>
                <span>teste e-flow</span>
              </div>
                         
            </Link>
 
          </nav>
        </aside>

        <button onClick={testarConexao} className={styles.MenubtnConexao} disabled={loading}>
          Verificar Conexão
        </button>

        <span className={styles.ledONOFF} >
          {connected ? '🟢' : '🔴'} 
        </span> 
        
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

        <div className={styles.imagem}>
           <img src={imgSat} className={styles.imgStyle} alt="Satélites"/>
        </div>

        </div>
          <footer className={styles.rodape}> {message && (
            <div style={{ whiteSpace: 'pre-line', gap:'50px'}}>
              {message}IP: 192.168.1.76 | mDNS: {ESP_NAME}
            </div>
            )}
           </footer>
        </div>
  );
}

export default Satelite;
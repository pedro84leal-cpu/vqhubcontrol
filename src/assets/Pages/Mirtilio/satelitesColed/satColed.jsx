import React, { useState, useEffect } from 'react';
import styles from './satColed.module.css'
import MenuPrincipal from '../../../Components/Menus/menuPrincipal';
import PUimg from '../../../Images/ImagemEq/satellite cooled.png'
import BBimg from '../../../Images/ImagemEq/e-flow.jpg'
import MirtilioConsoleMenu from '../MirtilioConsoleMenu';





function SateliteColed() {
  
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
    <>    
      <MenuPrincipal/>
      <MirtilioConsoleMenu />

      <section className={styles.stc_Titulo}>
        <h1>
            Teste Satélites cooled
        </h1>
      </section>
 
      <div className={styles.stc_Menu}>

        <nav className={styles.stc_Nav}>

          <button onClick={testarConexao} className={styles.stc_Conex} disabled={loading}>
            Verificar Conexão
            <span className={styles.stc_Led} >
            {connected ? '🟢' : '🔴'} 
          </span> 
          </button>
         

          <button className={styles.stc_Btn_Green} onClick={ativarPino} disabled={loading || !connected || pinoEstado === 'ON'}
            style={{ fontSize: '14px', fontFamily: 'monospace' ,
            backgroundColor: pinoEstado === 'ON' ? '#ccc' : '#4CAF50',
            cursor: (loading || !connected || pinoEstado === 'ON') ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            color: 'white'}}>
            {loading ? '...' : 'ON'}
          </button>

          <button className={styles.stc_Btn_Red} onClick={() => desativarPino(33)} 
            disabled={loading || !connected || pinoEstado === 'OFF'}
            style={{fontSize: '14px', fontFamily: 'monospace',
            backgroundColor: pinoEstado === 'OFF' ? '#ccc' : '#f44336',
            cursor: (loading || !connected || pinoEstado === 'OFF') ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', color: 'white' }}>
            {loading ? '...' : 'OFF'}
          </button>

          {pinoEstado === 'OFF' && (
          
          <section className={styles.stc_Hero}>
            <img src={PUimg} alt='bb'  className={styles.stc_Imagem} />
            <span className={styles.stc_SpamPU} >
              equipment under test
            </span>        
          </section> 

          )}
        </nav>      
      </div>

      <section className={styles.stc_Hero2}>
        <img src={BBimg} alt='bb'  className={styles.stc_Imagem2} />
        <p className={styles.stc_SpamBB} >
          Test equipment
        </p>        
      </section>

      <footer className={styles.stc_Rodape}> {message && (
        <div >
          {message}IP: 192.168.1.76 | mDNS: {ESP_NAME}
        </div>
        )}
      </footer>
    </>
  );
}

export default SateliteColed;
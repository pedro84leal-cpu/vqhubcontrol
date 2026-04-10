import React, { useState, useEffect } from 'react';
import styles from '../../Mirtilio/blueberry/bb.module.css'
import MenuPrincipal from '../../../Components/Menus/menuPrincipal.jsx';
import PUimg from '../../../Images/ImagemEq/PU300.jpg'
import BBimg from '../../../Images/ImagemEq/blueberry.jpg'
import MirtilioConsoleMenu from '../MirtilioConsoleMenu.jsx';


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
      <MirtilioConsoleMenu />

      <section className={styles.stTitulo}>
        <h1>
            Teste Power unit's
        </h1>
      </section>
 
      <div className={styles.bb2Menu}>

        <nav className={styles.bb2Nav}>

          <button onClick={testarConexao} className={styles.bbBtnConexao} disabled={loading}>
            Verificar Conexão
            <span className={styles.ledONOFF} >
            {connected ? '🟢' : '🔴'} 
          </span> 
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

              <div className={styles.grid}>
                <div id="item1"  style={{boxShadow: outputAtivo === 2 ? 
                  '0 0 15px rgba(76, 175, 80, 0.3), 0 0 5px rgba(76, 175, 79, 0.2)' : 'none'}}>
                  <h1 className={styles.h1}>
                    Plug 2
                  </h1>
                  <p style={{color: outputAtivo === 2 ? 'rgb(76, 175, 79)' : 'rgba(66, 70, 66, 0)', padding: '10px', fontSize:'0.8rem'}}>
                    Available
                  </p>
                </div>

                <div id="item2"style={{boxShadow: outputAtivo === 1 ? 
                  '0 0 15px rgba(76, 175, 80, 0.3), 0 0 5px rgba(76, 175, 80, 0.2)' : 'none'}}>
                  <h1 className={styles.h1}>
                    Plug 1
                  </h1>
                  <p style={{color: outputAtivo === 1 ? 'rgb(76, 175, 79)' : 'rgba(66, 70, 66, 0)', padding: '10px', fontSize:'0.8rem'}}>
                    Available
                  </p>
                </div>

                <div id="item3" style={{boxShadow: outputAtivo === 4 ? 
                  '0 0 15px rgba(76, 175, 80, 0.3), 0 0 5px rgba(76, 175, 80, 0.2)' : 'none'}}>
                  <h1 className={styles.h1}>
                    Plug 4
                  </h1>
                  <p style={{color: outputAtivo === 4 ? 'rgb(76, 175, 79)' : 'rgba(66, 70, 66, 0)', padding: '10px', fontSize:'0.8rem'}}>
                    Available
                  </p>
                </div>

                <div id="item3" style={{boxShadow: outputAtivo === 3 ? 
                  '0 0 15px rgba(76, 175, 80, 0.3), 0 0 5px rgba(76, 175, 80, 0.2)' : 'none'}}>
                  <h1 className={styles.h1}>
                    Plug 3
                  </h1>
                  <p style={{color: outputAtivo === 3 ? 'rgb(76, 175, 79)' : 'rgba(66, 70, 66, 0)', padding: '10px', fontSize:'0.8rem'}}>
                   Available
                  </p>
                </div>
              </div>

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

              <section className={styles.hero}>
                <img src={PUimg} alt='bb'  className={styles.imagem} />
                <span className={styles.spamPU} >
                  equipment under test
                </span>        
              </section>  
            </div>
          )}
        </nav>      
      </div>

      <section className={styles.hero2}>
        <img src={BBimg} alt='bb'  className={styles.imagem2} />
        <p className={styles.spamBB} >
          Test equipment
        </p>        
      </section>

      <footer className={styles.rodape}> {message && (
        <div >
          {message}IP: 192.168.1.76 | mDNS: {ESP_NAME}
        </div>
        )}
      </footer>
    </>
  );
}

export default Blueberry;
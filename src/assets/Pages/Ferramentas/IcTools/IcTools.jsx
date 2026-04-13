import React from 'react';


function IcT() {
  const testarElectron = () => {
    if (window.electronAPI) {
      // Exemplo: Abrir o Bloco de Notas do Windows
      window.electronAPI.abrirPrograma('C:\\Windows\\System32\\notepad.exe');
    } else {
      alert('Electron não está disponível. Execute com npm run electron-dev');
    }
  };

  return (
    <div className="App">
      <h1>App Industrial</h1>
      <button onClick={testarElectron}>
        Testar Electron - Abrir Bloco de Notas
      </button>
      <p style={{ marginTop: '20px', color: '#666' }}>
        {window.electronAPI 
          ? '✅ Electron está ativo!' 
          : '⚠️ Modo Browser - Execute npm run electron-dev'}
      </p>
    </div>
  );
}

export default IcT;
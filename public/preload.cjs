const { contextBridge, ipcRenderer } = require('electron');

// Expor API segura para o React
contextBridge.exposeInMainWorld('electronAPI', {
    abrirPrograma: (caminho) => ipcRenderer.send('abrir-executavel', caminho)
});
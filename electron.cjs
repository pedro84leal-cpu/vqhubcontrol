const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

// Verificar se está em desenvolvimento
const isDev = !app.isPackaged;

if (!app.isPackaged) {
    require('electron-reloader')(module);
}

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    // Carregar a aplicação React
    if (isDev) {
        // Em desenvolvimento: carrega do servidor local do React
        win.loadURL('http://localhost:5173');
        win.webContents.openDevTools(); // Abre as ferramentas de desenvolvimento
    } else {
        // Em produção: carrega os ficheiros compilados
        win.loadFile(path.join(__dirname, '../build/index.html'));
    }
}

// Quando o Electron estiver pronto
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Fechar a aplicação quando todas as janelas estiverem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// =============================================
// IPC: Ouvir pedidos do React para abrir programas
// =============================================
ipcMain.on('abrir-executavel', (event, caminhoPrograma) => {
    console.log(`Tentando abrir: ${caminhoPrograma}`);
    
    shell.openPath(caminhoPrograma).then((error) => {
        if (error) {
            console.error('Erro ao abrir programa:', error);
        } else {
            console.log('Programa aberto com sucesso!');
        }
    });
});
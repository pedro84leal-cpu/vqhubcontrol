import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import MirtilioConsoleMenu from './assets/Pages/Mirtilio/MirtilioConsoleMenu';
import Dashboard from './assets/Pages/Dashboard/dashboard';
import Gestao from './assets/Pages/Dashboard/Dashboard-Pages/gestaoLinha';
import Troubleshooting from './assets/Pages/Troubleshooting/troubleshooting';
import Web from './assets/Pages/WebLinks/Web';
import Ferramentas from './assets/Pages/Ferramentas/ferramentas';
import Prodt from './assets/Pages/Produtividade/produtividade';
import TestReport from './assets/Pages/TestReport/testReport';
import Blueberry from './assets/Pages/Mirtilio/blueberry/blueberry';




function App() {
  
  const basename = process.env.NODE_ENV === 'production' ? '/vqhubcontrol' : '';
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blueberry' element={<Blueberry />} />
        <Route path="/mirtilo-console" element={<MirtilioConsoleMenu/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gestao' element={<Gestao/>} />
        <Route path='/troubleshooting' element={<Troubleshooting/>} />
        <Route path='/web' element={<Web />} />
        <Route path='/tools' element={<Ferramentas />} />
        <Route path='/prodt' element={<Prodt />} />
        <Route path='/test-report' element={<TestReport />} />
      </Routes>
  );
}

export default App;


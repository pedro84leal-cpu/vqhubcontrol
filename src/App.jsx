import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import Satelite from './assets/Pages/Mirtilio/Satelites';
import E_flow from './assets/Pages/Mirtilio/E_flow';
import Blueberry from './assets/Pages/Mirtilio/blueberry';
import MirtilioConsoleMenu from './assets/Pages/Mirtilio/MirtilioConsoleMenu';
import Dashboard from './assets/Pages/Dashboard/dashboard';
import Gestao from './assets/Pages/Dashboard/Dashboard-Pages/gestaoLinha';
import Troubleshooting from './assets/Pages/Troubleshooting/troubleshooting';
import Web from './assets/Pages/WebLinks/Web';
import Ferramentas from './assets/Pages/Ferramentas/ferramentas';
import Prodt from './assets/Pages/Produtividade/produtividade';




function App() {
  
  const basename = process.env.NODE_ENV === 'production' ? '/vqhubcontrol' : '';
  return (
    <BrowserRouter basename='/vqhubcontrol'>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blueberry" element={<Blueberry/>} />
        <Route path='/satelite' element={<Satelite/>} />
        <Route path='/eflow' element={<E_flow/>}/>
        <Route path="/mirtilo-console" element={<MirtilioConsoleMenu/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gestao' element={<Gestao/>} />
        <Route path='/troubleshooting' element={<Troubleshooting/>} />
        <Route path='/web' element={<Web />} />
        <Route path='/tools' element={<Ferramentas />} />
        <Route path='/prodt' element={<Prodt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


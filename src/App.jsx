import { Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import MirtilioConsoleMenu from './assets/Pages/Mirtilio/MirtilioConsoleMenu';
import Dashboard from './assets/Pages/Dashboard/dashboard';
import Troubleshooting from './assets/Pages/Troubleshooting/troubleshooting';
import Web from './assets/Pages/WebLinks/Web';
import Ferramentas from './assets/Pages/Ferramentas/ferramentas';
import Prodt from './assets/Pages/Produtividade/produtividade';
import TestReport from './assets/Pages/TestReport/testReport';
import Blueberry from './assets/Pages/Mirtilio/blueberry/blueberry';
import './App.css'
import E_flow from './assets/Pages/Mirtilio/eflow/E_flow';
import Satelite from './assets/Pages/Mirtilio/satelite/Satelites';
import SateliteColed from './assets/Pages/Mirtilio/satelitesColed/satColed';
import Planeamento from './assets/Pages/Dashboard/Dashboard-Pages/Planeamento/planeamento';
import Gestao from './assets/Pages/Dashboard/Dashboard-Pages/Gestao-linha/gestaoLinha';
import EcogMenu from './assets/Pages/WebLinks/Ecog';
import MenuPCB from './assets/Pages/Produtividade/EsquemasPCB/menuPCB';
import MenuComp from './assets/Pages/Produtividade/EsquemasComp/Comp';
import MenuIT from './assets/Pages/Produtividade/ITs/IT';
import IcT from './assets/Pages/Ferramentas/IcTools/IcTools';




function App() {
  
  const basename = process.env.NODE_ENV === 'production' ? '/vqhubcontrol' : '';
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blueberry' element={<Blueberry />} />
        <Route path="/mirtilo-console" element={<MirtilioConsoleMenu/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gestao' element={<Gestao />} />
        <Route path='/troubleshooting' element={<Troubleshooting/>} />
        <Route path='/web' element={<Web />} />
        <Route path='/tools' element={<Ferramentas />} />
        <Route path='/prodt' element={<Prodt />} />
        <Route path='/test-report' element={<TestReport />} />
        <Route path='/eflow' element={<E_flow />} />
        <Route path='/sat' element={<Satelite />} />
        <Route path='/satColed' element={<SateliteColed />} />
        <Route path='/planeamento' element={<Planeamento />} />
        <Route path='/ecog' element={<EcogMenu />} />
        <Route path='/pcb' element={<MenuPCB />} />
        <Route path='/comp' element={<MenuComp />} />
        <Route path='/it' element={<MenuIT />} />
        <Route path='/Ict' element={<IcT />} />
      </Routes>
  );
}

export default App;


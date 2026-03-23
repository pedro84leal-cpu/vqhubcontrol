import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import MonitorTemperaturas from './assets/Pages/MonitorTemperaturas';
import MatrizErros from './assets/Pages/Matriz_Menu/MatrizErrosMenu';
import Satelite from './assets/Pages/Mirtilio_Menu/Satelites';
import E_flow from './assets/Pages/Mirtilio_Menu/E_flow';
import CCSPage from './assets/Pages/Matriz_Menu/Matriz-Pages/ccs-page';
import Blueberry from './assets/Pages/Mirtilio_Menu/blueberry';
import MirtilioConsoleMenu from './assets/Pages/Mirtilio_Menu/MirtilioConsoleMenu';
import Dashboard from './assets/Pages/Dashboard/dashboard';
import Gestao from './assets/Pages/Dashboard/Dashboard-Pages/gestaoLinha';

function App() {
  
  const basename = process.env.NODE_ENV === 'production' ? '/vqhubcontrol' : '';
  return (
    <BrowserRouter basename='/vqhubcontrol'>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blueberry" element={<Blueberry/>} />
        <Route path="/monitor-temperaturas" element={<MonitorTemperaturas />} />
        <Route path="/matriz-erros" element={<MatrizErros />} />
        <Route path='/satelite' element={<Satelite/>} />
        <Route path='/eflow' element={<E_flow/>}/>
        <Route path="/ccs" element={<CCSPage />}/>
        <Route path="/mirtilo-console" element={<MirtilioConsoleMenu/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/gestao' element={<Gestao/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


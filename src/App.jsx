import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import MirtiloConsole from './assets/Pages/Mirtilio_Menu/MirtiloConsole';
import MonitorTemperaturas from './assets/Pages/MonitorTemperaturas';
import MatrizErros from './assets/Pages/MatrizErros';
import Satelite from './assets/Pages/Mirtilio_Menu/Satelites';
import E_flow from './assets/Pages/Mirtilio_Menu/E_flow';

function App() {
  
  const basename = process.env.NODE_ENV === 'production' ? '/vqhubcontrol' : '';
  return (
    <BrowserRouter basename='/vqhubcontrol'>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mirtilo-console" element={<MirtiloConsole />} />
        <Route path="/monitor-temperaturas" element={<MonitorTemperaturas />} />
        <Route path="/matriz-erros" element={<MatrizErros />} />
        <Route path='/satelite' element={<Satelite/>} />
        <Route path='/eflow' element={<E_flow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


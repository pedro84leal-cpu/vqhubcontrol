import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home.jsx';
import MirtiloConsole from './assets/Pages/Mirtilio_Menu/MirtiloConsole.jsx';
import MonitorTemperaturas from './assets/Pages/MonitorTemperaturas.jsx';
import MatrizErros from './assets/Pages/MatrizErros.jsx';
import Satelite from './assets/Pages/Mirtilio_Menu/Satelites.jsx';
import E_flow from './assets/Pages/Mirtilio_Menu/E_flow.jsx';

function App() {
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


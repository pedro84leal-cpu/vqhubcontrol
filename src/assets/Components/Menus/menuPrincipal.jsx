import { Link } from 'react-router-dom'; 
import './menuPrincipal.css';
import Consola from '../../../assets/Images/icones/dash.png';
import Matriz from '../../../assets/Images/icones/Matriz.png';
import Utilitarios from '../../../assets/Images/icones/Tools.png';
import Instrucoes from '../../../assets/Images/icones/Inst.png';
import Dashboard from '../../../assets/Images/icones/gestao.png';
import TesteReport from '../../../assets/Images/icones/testereport.png';


function MenuPrincipal() {
  return (
    <div className="containerPrincipal">
        <div className="menuPrincipal">
            <header className='Principal-Titulo'>
                <h1>
                    VQ
                </h1>
                <p>
                    Hub Control
                </p>
            </header>
            <aside>

                <nav>

                    <Link to="/mirtilo-console" className="menuPrincipal-Item">
                        <img src={Consola} className="icon" alt="Mirtilio Console" />
                        <span>Mirtilio console</span>
                    </Link>

                    <Link to="/matriz-erros" className="menuPrincipal-Item">
                        <img src={Matriz} className="icon" alt="Matriz erros"/>
                        <span>Matriz de erros</span>
                    </Link>

                    <Link to="/monitor-temperaturas" className="menuPrincipal-Item">
                        <img src={Utilitarios} className="icon" alt="Utilitarios"/>
                        <span>Utilitários</span>
                    </Link>

                    <Link to="/matriz-erros" className="menuPrincipal-Item">
                        <img src={Instrucoes} className="icon" alt="Instrucoes"/>
                        <span>Instruções</span>
                    </Link>

                    <Link to="/matriz-erros" className="menuPrincipal-Item">
                        <img src={Dashboard} className="icon" alt="Dashboard"/>
                        <span>Dashboard</span>
                    </Link>

                    <Link to="/matriz-erros" className="menuPrincipal-Item">
                        <img src={TesteReport} className="icon" alt="Test Report"/>
                        <span>Test Report</span>
                    </Link>

                </nav>
            </aside>
        </div>       
     </div>
  );
}

export default MenuPrincipal;
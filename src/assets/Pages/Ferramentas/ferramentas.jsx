import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Ferramentas/ferramentas.module.css'
import { PiWebhooksLogoFill } from "react-icons/pi";
import { SiRetool } from "react-icons/si";
import { SiMubi } from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { RiMiniProgramFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { FaBarcode } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";




function Ferramentas(){

    const abrirEvSIM = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/Ev-Simulator/ev_simulator.exe');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

    const abrirExD = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/Excel dinámico/Excel_dinamico_Teste_V24.xlsm');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

       const abrirIcTools = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/ic-tool_3.2.0/ic-production.exe');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

       const abrirValSn = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/Validação SN/Validação NS_VQ 1.xlsm');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

       const abrirSTM = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/STM/STM32CubeProgrammer.lnk');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

       const abrirPuTTY = () => {
    if (window.electronAPI) {
            window.electronAPI.abrirPrograma('C:/Users/PedroLeal/OneDrive - I-Charging/Documents/Software_HubControl/PuTTY/PuTTY.lnk');
        } else {
            alert('Electron não está disponível. Execute com npm run electron-dev');
        }
    };

    return(
        <>
        <MenuPrincipal/>
        <div className={styles.toolMenu} >
            <header className={styles.toolTitulo}>
                <h1>
                    Tool's
                </h1>
            </header>
            <aside>
            <nav className={styles.toolNav}>

                 <Link  to="/" className={styles.toolLink}>
                    <IoChevronBack  className={styles.toolIcon} />
                    <span>Home</span>
                </Link>

                 <a href="http://192.168.2.100" className={styles.toolLink} target="_blank" rel="noopener noreferrer">
                    <PiWebhooksLogoFill  className={styles.toolIcon} />
                    <span>wizard</span>
                </a>

                <Link to='#' className={styles.toolLink} onClick={abrirEvSIM} >
                    <SiRetool  className={styles.toolIcon} />
                    <span>EV-Simulator</span>
                </Link>

                <Link to='#' className={styles.toolLink} onClick={abrirIcTools} >
                    <SiMubi   className={styles.toolIcon} />
                    <span>IC Tools</span>
                </Link>

                <Link to='#' className={styles.toolLink} onClick={abrirSTM} >
                    <RiMiniProgramFill    className={styles.toolIcon} />
                    <span>STM Programmer</span>
                </Link>

                <Link to='#' className={styles.toolLink} onClick={abrirPuTTY} >
                    <FaLaptopCode   className={styles.toolIcon} />
                    <span>PuTTY</span>
                </Link>

                <Link to='#' className={styles.toolLink} onClick={abrirExD} >
                    <RiFileExcel2Line   className={styles.toolIcon} />
                    <span>Excel dinâmico</span>
                </Link>

                <Link to='#' className={styles.toolLink} onClick={abrirValSn} >
                    <FaBarcode   className={styles.toolIcon} />
                    <span>Validar SN</span>
                </Link>

                <a href='https://icharging.sharepoint.com/sites/internalchannel/P%26P/Lists/Project%20Configurations/AllItems.aspx'  
                    className={styles.toolLink} target="_blank" rel="noopener noreferrer" >
                    <GrDocumentConfig   className={styles.toolIcon} />
                    <span>Proj. configuration</span>
                </a>


       
            </nav>
            </aside>                
        </div>     
        </>   
    )
}

export default Ferramentas
import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Ferramentas/ferramentas.module.css'
import { IoChevronBack } from "react-icons/io5";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { SiRetool } from "react-icons/si";
import { SiMubi } from "react-icons/si";





function Ferramentas(){

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

                <Link to="/" className={styles.toolLink}>
                    <IoChevronBack  className={styles.toolIcon} />
                </Link>

        
                <a href="http://192.168.2.100" className={styles.toolLink} target="_blank" rel="noopener noreferrer">
                    <PiWebhooksLogoFill  className={styles.toolIcon} />
                    <span>wizard</span>
                </a>

                <a href="http://192.168.2.100" className={styles.toolLink} target="_blank" rel="noopener noreferrer">
                    <SiRetool  className={styles.toolIcon} />
                    <span>Ic Tool</span>
                </a>

                <a href="http://192.168.2.100" className={styles.toolLink} target="_blank" rel="noopener noreferrer">
                    <SiMubi   className={styles.toolIcon} />
                    <span>Ev Simulator</span>
                </a>


       
            </nav>
            </aside>                
        </div>     
        </>   
    )
}

export default Ferramentas
import styles from './Menu.module.css'
import BB from '../../Images/botoes/BB.png';
import Sat from '../../Images/botoes/sate.png';
import Eflow from '../../Images/botoes/e-flow.png';
import MenuPrincipal from '../../Components/Menus/menuPrincipal';
import {Link, useNavigate } from 'react-router-dom';



function MirtilioConsoleMenu() {
    const navigate = useNavigate();
    
  return (
    <div className={styles.MenuContainer}>
        <MenuPrincipal/>
        <div className={styles.Menu}>
        <header className={styles.MenuTitulo}>
          <h1>
            Mirtilo
          </h1>
          <p>
            Console
          </p>

        </header>
        <aside>
          <nav className={styles.MenuItem}>

            <Link to="/blueberry">
              <img src={BB} className={styles.MenuIcon} alt="BlueBerry"/>

               <div class={styles.textoContainer}>       
                <span>teste Power unit's</span>
                <small className={styles.MenuSubtitulo}>blueberry plus com 4 output's</small>
              </div>

            </Link>

            <Link to="/satelite">
              <img src={Sat} className={styles.MenuIcon} alt="Satélites"/>

              <div className={styles.textoContainer}>
                <span>teste de satélites</span>
                <small className={styles.MenuSubtitulo}>4 - output's externas </small>
              </div>

            </Link>

            <Link to="/eflow">  
              <img src={Eflow} className={styles.MenuIcon} alt="e-Flow"/>
          
              <div className={styles.textoContainer}>
                <span>teste e-flow</span>
              </div>
                        
            </Link>
 
          </nav>
        </aside>
        </div>
    </div>
  );
}

export default MirtilioConsoleMenu;
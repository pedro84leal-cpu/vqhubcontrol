import styles from './mirtilioMenu.module.css'
import MenuPrincipal from '../../Components/Menus/menuPrincipal';
import {Link} from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";
import { MdSatelliteAlt } from "react-icons/md";
import { GiDandelionFlower } from "react-icons/gi";
import { GiAbstract033 } from "react-icons/gi";
import { SiSatellite } from "react-icons/si";







function MirtilioConsoleMenu() {

  
  return (
    <>   
      <MenuPrincipal/>
        
      <div className={styles.mMenu} >

        <header className={styles.mTitulo}>
          <h1>
            Mirtilio Console
          </h1>
        </header>

        <aside>
          <nav className={styles.mNav}>

            <Link  to="/" className={styles.mLink}>
              <IoChevronBack  className={styles.mIcon} />
            </Link>


            <Link to="/blueberry" className={styles.mLink}>
              <GiAbstract033 className={styles.mIcon} />
              <div class={styles.mTexto}>       
                <span>teste Power unit's</span>
                <small className={styles.mSmall}>bb plus com 4 output's</small>
              </div>
            </Link>

            <Link to="/sat" className={styles.mLink}>
              <MdSatelliteAlt className={styles.mIcon} />
              <div className={styles.mTexto}>
                <span>teste de satélites</span>
              </div>
            </Link>

            <Link to="/satColed" className={styles.mLink}>  
              <SiSatellite  className={styles.mIcon} />
              <div className={styles.mTexto}>
                <span>teste satélites cooled</span>
              </div>            
            </Link>

            <Link to="/eflow" className={styles.mLink}>  
              <GiDandelionFlower className={styles.mIcon} />
              <div className={styles.mTexto}>
                <span>teste e-flow</span>
              </div>            
            </Link>
 
          </nav>
        </aside>
      </div>
  </>
  );
}

export default MirtilioConsoleMenu;
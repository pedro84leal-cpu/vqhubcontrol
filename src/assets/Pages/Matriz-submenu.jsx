import styles from './MatrizMenuPCB.module.css';
import circuito from '../Images/circuito.png';
import ccmd from '../Images/CCMD.png';
import sensing from '../Images/sensing.png';
import power from '../Images/power.png';
import { Link } from 'react-router-dom'; 




function MatrizSubMenu({ submenuAberto }) {
  return (
    <>
      {submenuAberto && (
        <div className={styles.aspecto}>
            <div className={styles.menu}>
                <nav >

                    <Link className={styles.menuItens}>
                        <img src={circuito} alt="Circuito" className={styles.menuIcon} />

                        <div className={styles.textContainer}>
                            <span>CCS</span>
                        </div>

                    </Link>

                    <Link className={styles.menuItens}>
                        <img src={ccmd} alt="Circuito" className={styles.menuIcon} />

                        <div className={styles.textContainer}>
                            <span>CCMD</span>
                        </div>

                    </Link>

                    <Link className={styles.menuItens}>
                        <img src={sensing} alt="Circuito" className={styles.menuIcon} />

                        <div className={styles.textContainer}>
                            <span>Sensing</span>
                        </div>

                    </Link>

                    <Link className={styles.menuItens}>
                        <img src={power} alt="Circuito" className={styles.menuIcon} />

                        <div className={styles.textContainer}>
                            <span>Power</span>
                        </div>

                    </Link>
                    
               
                </nav>
            </div>
        </div>
      )}
    </>
  )
}

export default MatrizSubMenu;
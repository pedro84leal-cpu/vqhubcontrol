import styles from '../Matriz_Menu/MenuPCB.module.css';
import circuito from './../../Images/icones/circuito.png';
import ccmd from './../../Images/icones/ccmd.png';
import sensing from './../../Images/icones/sensing.png';
import power from './../../Images/icones/power.png';
import { Link } from 'react-router-dom'; 




function SubMenuAberto({ submenuAberto }) {
  return (
    <>
      {submenuAberto && (
        <div className={styles.aspecto}>
            <div className={styles.menu}>
                <nav >

                    <Link to="/ccs" className={styles.menuItens}>
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

export default SubMenuAberto;
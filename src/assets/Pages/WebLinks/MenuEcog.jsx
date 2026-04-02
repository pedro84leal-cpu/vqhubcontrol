import styles from '../../Pages/WebLinks/MenuEcog.module.css';
import circuito from './../../Images/icones/circuito.png';
import ccmd from './../../Images/icones/ccmd.png';
import sensing from './../../Images/icones/sensing.png';
import power from './../../Images/icones/power.png';
import { Link } from 'react-router-dom'; 




function MenuEcogAberto({ menu_ecog_Aberto }) {
  return (
    <>
      {menu_ecog_Aberto && (
        <div className={styles.ecogContainer}>
            <div className={styles.ecogMenu}>
                <nav className={styles.ecogNav}>

                    <Link to="/ccs" className={styles.ecogLink}>
                        <span>Ecog 100</span>
                    </Link>

                    <Link className={styles.ecogLink}>
                        <span>Ecog 101</span>
                    </Link>

                    <Link className={styles.ecogLink}>
                        <span>Ecog102</span>                
                    </Link>

                    <Link className={styles.ecogLink}>
                        <span>Ecog 103</span>
                    </Link>   

                    <Link className={styles.ecogLink}>
                        <span>Ecog 104</span>
                    </Link>                                
                </nav>
            </div>
        </div>
      )}
    </>
  )
}

export default MenuEcogAberto;
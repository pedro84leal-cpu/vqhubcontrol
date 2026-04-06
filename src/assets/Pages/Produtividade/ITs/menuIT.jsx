import styles from '../ITs/menuIT.module.css';
import { Link } from 'react-router-dom'; 




function MenuITAberto({ menu_it_Aberto }) {
  return (
    <>
      {menu_it_Aberto && (
        <div className={styles.itContainer}>
            <div className={styles.itMenu}>
                <nav className={styles.itNav}>

                    <Link to="/ccs" className={styles.itLink}>
                        <span>Instruções</span>
                    </Link>
                             
                </nav>
            </div>
        </div>
      )}
    </>
  )
}

export default MenuITAberto;
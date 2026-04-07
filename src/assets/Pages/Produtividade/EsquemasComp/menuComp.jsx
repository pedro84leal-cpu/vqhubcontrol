import styles from '../EsquemasComp/menuComp.module.css';
import { Link } from 'react-router-dom';





function MenuCompAberto({ menu_comp_Aberto }) {
  
  return (
    <>
      {menu_comp_Aberto && (
        <div className={styles.compContainer}>
            <div className={styles.compMenu} >
                <nav className={styles.compNav}>

                    <Link to="/ccs" className={styles.compLink}>
                        <span>Componentes</span>
                    </Link>
                             
                </nav>
            </div>
        </div>
      )}
    </>
  )
}

export default MenuCompAberto;
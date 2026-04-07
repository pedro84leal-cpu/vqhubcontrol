import styles from '../EsquemasPCB/menuPCB.module.css';
import { Link } from 'react-router-dom'; 





function MenuPCBAberto({ menu_pcb_Aberto }) {
 
  return (
    <>
      {menu_pcb_Aberto && (
        <div className={styles.pcbContainer}>
            <div className={styles.pcbMenu} >
                <nav className={styles.pcbNav}>

                    <Link to="/ccs" className={styles.pcbLink}>
                        <span>PCB</span>
                    </Link>
                             
                </nav>
            </div>
        </div>
      )}
    </>
  )
}

export default MenuPCBAberto;
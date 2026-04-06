import styles from '../EsquemasPCB/menuPCB.module.css';
import { Link } from 'react-router-dom'; 
import { useMenu } from '../../../../contexts/MenuContext';




function MenuPCBAberto({ menu_pcb_Aberto }) {
  const { posicoes, larguras } = useMenu();
  return (
    <>
      {menu_pcb_Aberto && (
        <div className={styles.pcbContainer}>
            <div className={styles.pcbMenu} style={{
                left: `${posicoes.submenu2}px`,
                width: `${larguras.submenu2Fixo}px`
            }}>
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
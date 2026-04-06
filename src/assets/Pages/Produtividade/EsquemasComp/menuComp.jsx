import styles from '../EsquemasComp/menuComp.module.css';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../../contexts/MenuContext';




function MenuCompAberto({ menu_comp_Aberto }) {
  const { posicoes, larguras } = useMenu();
  return (
    <>
      {menu_comp_Aberto && (
        <div className={styles.compContainer}>
            <div className={styles.compMenu} style={{
                left: `${posicoes.submenu2}px`,
                width: `${larguras.submenu2Fixo}px`
            }}>
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
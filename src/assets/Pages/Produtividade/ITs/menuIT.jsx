import styles from '../ITs/menuIT.module.css';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../../contexts/MenuContext';




function MenuITAberto({ menu_it_Aberto }) {

  const { posicoes, larguras } = useMenu();
  
  return (
    <>
      {menu_it_Aberto && (
        <div className={styles.itContainer}>
            <div className={styles.itMenu} style={{
                left: `${posicoes.submenu2}px`,
                width: `${larguras.submenu2Fixo}px`
            }}>
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
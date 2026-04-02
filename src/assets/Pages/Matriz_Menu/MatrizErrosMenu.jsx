import MenuPrincipal from '../../Components/Menus/menuPrincipal';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../Matriz_Menu/Matriz.module.css'
import MatrizSubMenu from './MenuBoards';
import { GiElectricalResistance } from "react-icons/gi";
import { IoChevronBack } from "react-icons/io5";
import { BiSolidComponent } from "react-icons/bi";



function MatrizErrosMenu() {

  const [submenuAberto, setSubmenuAberto] = useState(false)
  
  const abreSubmenu = () => {
    setSubmenuAberto(!submenuAberto) 
  }

 return (
    <>
    <div className={styles.matrizContainer}>
      <MenuPrincipal/>
      <div className={styles.matrizMenu}>
        <header className={styles.matrizTitulo}>
          <h1>
            Matriz de erros
          </h1>
        </header>
        <aside>
          <nav className={styles.matrizNav}>

            <Link to="/" className={styles.matrizLink}>
                <IoChevronBack  className={styles.matrizIcon} />
            </Link>

            <Link onClick={abreSubmenu} className={`${styles.matrizLink} ${submenuAberto ? styles.menuAberto : ''}`}>
              <GiElectricalResistance className={styles.matrizIcon} />     
              <span>Esquemas PCB's </span>
            </Link>

            <Link onClick={abreSubmenu} className={`${styles.matrizLink} ${submenuAberto ? styles.menuAberto : ''}`}>
              <BiSolidComponent  className={styles.MenuIcon} />
              <span>Esq. Componentes </span>
            </Link>
          <MatrizSubMenu submenuAberto={submenuAberto} />
          </nav>
        </aside>
      </div>  
    </div>
    </>
    
  );
}

export default MatrizErrosMenu;
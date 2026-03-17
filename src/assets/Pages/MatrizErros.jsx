import MenuPrincipal from '../Components/Menus/menuPrincipal';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Mirtilio_Menu/subMenu.module.css'
import iconEsquemas from '../Images/Esquemas.png';
import iconComponents from '../Images/componentes.png';
import Eflow from '../Images/e-flow.png';



function MatrizErros() {

 return (
    <div className={styles.MenuContainer}>
      <MenuPrincipal/>
      <div className={styles.Menu}>
        <header className={styles.MenuTitulo}>
          <h1>
            Matriz
          </h1>
          <p>
            Erros
          </p>

        </header>
        <aside>
          <nav className={styles.MenuItem}>

            <Link to="/mirtilo-console" onClick={(e) => {e.preventDefault();ativarPino(33, "/mirtilo-console");}}>
              <img src={iconEsquemas} className={styles.MenuIcon} alt="Esquemas"/>

               <div class={styles.textoContainer}>       
                <span>Esquemas PCB's</span>
                {/*<small className={styles.MenuSubtitulo}>esquemas pcb's</small>*/}
              </div>

            </Link>

            <Link to="/satelite" onClick={() => desativarPino(33)} >
              <img src={iconComponents} className={styles.MenuIcon} alt="Satélites"/>

              <div className={styles.textoContainer}>
                <span>Esq. Componentes</span>
                {/*<small className={styles.MenuSubtitulo}>4 - output's externas </small>*/}
              </div>

            </Link>

           {/*<Link to="/eflow">  
              <img src={Eflow} className={styles.MenuIcon} alt="e-Flow"/>
          
              <div className={styles.textoContainer}>
                <span>teste e-flow</span>
              </div>
                        
            </Link>*/}

          </nav>
        </aside>
      </div>
    
    </div>
    
  );
}

export default MatrizErros;
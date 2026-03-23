import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Dashboard/Menu.module.css'
import iconFluxo from  '../../Images/icones/fluxo.png'
import iconRework from '../../Images/icones/rework.png'
import iconPlaneamento from '../../Images/icones/Planeamento.png'




function Dashboard(){

    return(
        <div className={styles.MenuContainer}>
            <MenuPrincipal/>
                <div className={styles.Menu}>
                    <header className={styles.MenuTitulo}>
                        <h1>
                            Dashboard
                        </h1>

                    </header>

                    <aside>
                    <nav className={styles.MenuItem}>

                        <Link to="/gestao">
                            <img src={iconFluxo} className={styles.MenuIcon} alt="Esquemas"/>

                            <div className={styles.textoContainer}>       
                                <span>Gestão de linha </span>
                                {/*<small className={styles.MenuSubtitulo}>esquemas pcb's</small>*/}
                            </div>

                        </Link>

                           <Link>
                            <img src={iconPlaneamento} className={styles.MenuIcon} alt="Esquemas"/>

                            <div className={styles.textoContainer}>       
                                <span>Planeamento </span>
                                {/*<small className={styles.MenuSubtitulo}>esquemas pcb's</small>*/}
                            </div>

                        </Link>

                        <Link >
                            <img src={iconRework} className={styles.MenuIcon} alt="Satélites"/>

                            <div className={styles.textoContainer}>
                                <span>Rework's </span>
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
    )
}

export default Dashboard
import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Dashboard/dashboard.module.css'
import { TiFlowParallel } from "react-icons/ti";
import { MdEditCalendar } from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";




function Dashboard(){

    return(
        <>
        <div className={styles.dashboardContainer}>
        <MenuPrincipal/>
        <div className={styles.dashboardMenu}>
            <header className={styles.dashboardTitulo}>
                <h1>
                    Dashboard
                </h1>
            </header>
            <aside>
            <nav className={styles.dashboardNav}>

                <Link to="/" className={styles.dashboardLink}>
                    <IoChevronBack  className={styles.dashboardIcon} />
                </Link>

                <Link to="/gestao" className={styles.dashboardLink}>
                    <TiFlowParallel className={styles.dashboardIcon} />
                    <span>Gestão de linha </span>
                </Link>

                <Link className={styles.dashboardLink}>
                    <MdEditCalendar className={styles.dashboardIcon}/>     
                    <span>Planeamento </span>
                </Link>

                <Link className={styles.dashboardLink} >
                    <IoCodeWorkingSharp className={styles.dashboardIcon} />
                    <span>Rework's </span>
                </Link>

                </nav>
                </aside>
            </div>
    
        </div> 
        </>   
    )
}

export default Dashboard
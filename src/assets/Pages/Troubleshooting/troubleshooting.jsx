import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../Troubleshooting/troubleshooting.module.css'
import { IoChevronBack } from "react-icons/io5";




function Troubleshooting(){

    return(
           <>
        <div className={styles.tsContainer}>
        <MenuPrincipal/>
        <div className={styles.tsMenu}>
            <header className={styles.tsTitulo}>
                <h1>
                    Troubleshooting
                </h1>
            </header>
            <aside>
            <nav className={styles.tsNav}>

                <Link to="/" className={styles.tsLink}>
                    <IoChevronBack  className={styles.tsIcon} />
                </Link>

    

                </nav>
                </aside>
            </div>
    
        </div> 
        </>

    )
}

export default Troubleshooting
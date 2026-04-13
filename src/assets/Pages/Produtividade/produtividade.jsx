import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Produtividade/produtividade.module.css'
import { IoChevronBack } from "react-icons/io5";
import { GiPowerGenerator } from "react-icons/gi";
import { TbSchema } from "react-icons/tb";
import { MdOutlineIntegrationInstructions } from "react-icons/md";



function Prodt(){
    
    return(
        <>
        <MenuPrincipal/>    
        <div className={styles.proMenu}>
            
            <header className={styles.proTitulo}>
                <h1>
                    Produtividade
                </h1>
            </header>
            <aside>
            <nav className={styles.proNav}>

                <Link to="/" className={styles.proLink}>
                    <IoChevronBack  className={styles.proIcon} />
                </Link>

                <Link to='/pcb' className={styles.proLink} >
                    <TbSchema className={styles.proIcon} />
                    <span>Esquemas PCB's </span>
                </Link>


                <Link to='/comp' className={styles.proLink}>
                    <GiPowerGenerator className={styles.proIcon} />
                    <span>Esquemas Comp. </span>
                </Link>
                
                <Link to='/it' className={styles.proLink}>
                        <MdOutlineIntegrationInstructions className={styles.proIcon} />
                        <span>Inst. de trabalho </span>
                </Link>
                </nav>
                </aside>                
            </div>

        <div className={styles.proContainer}>

        </div>       
        </>   
    )
}

export default Prodt
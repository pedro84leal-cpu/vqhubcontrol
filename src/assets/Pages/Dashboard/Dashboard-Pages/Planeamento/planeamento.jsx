import Dashboard from "../../../Dashboard/dashboard"
import MenuPrincipal from '../../../../Components/Menus/menuPrincipal'
import styles from '../Planeamento/planeamento.module.css'





function Planeamento(){

    return(

        <>
        <MenuPrincipal />
        <Dashboard />

        <header className={styles.plHeader}>
            <h1 className={styles.plTitulo}>
                Planeamento
            </h1>
        </header>

        <div className={styles.plContainer}>
            <div className={styles.plcard}>

            </div>
            <div className={styles.plcard}>

            </div>
            <div className={styles.plcard}>
                
            </div>
        </div>

        <div className={styles.tabela}>

        </div>
    
        


        </>
    )
}

export default Planeamento
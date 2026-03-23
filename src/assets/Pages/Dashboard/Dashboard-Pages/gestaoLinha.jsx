import MenuPrincipal from "../../../Components/Menus/menuPrincipal"
import Dashboard from "../dashboard"
import styles from './tab.module.css'



function Gestao(){

    return(

        <div className={styles.conteiner}>
            <MenuPrincipal/>
            <Dashboard/>

            <div className={styles.tabConfg}>
                <header className={styles.header}>
                    <h1>
                        Configurações
                    </h1>
                </header>
                <div className={styles.line1}>
                    <h1 className={styles.lineHeader}>
                        1
                    </h1>
                </div>

                <div className={styles.line2}>
                </div>

                <div className={styles.line3}>
                </div>

                <div className={styles.line4}>
                </div>

            </div>

            <div className={styles.tabBuf1}>
                <header className={styles.headerBuf}>
                    <h1>
                        buffer 
                    </h1>
                </header>
            </div>

            <div className={styles.tabFunc}>
                <header className={styles.header}>
                    <h1>
                        Funcional
                    </h1>
                </header>
                <div className={styles.line1}>
                    <h1 className={styles.lineHeader}>
                        1
                    </h1>
                </div>

                <div className={styles.line2}>
                </div>

                <div className={styles.line3}>
                </div>

                <div className={styles.line4}>
                </div>

            </div>

            <div className={styles.tabBuf2}>
                <header className={styles.headerBuf}>
                    <h1>
                        buffer 
                    </h1>
                </header>
            </div>

             <div className={styles.tabPL}>
                <header className={styles.header}>
                    <h1>
                        Power Loads
                    </h1>
                </header>
                <div className={styles.line1}>
                    <h1 className={styles.lineHeader}>
                        111
                    </h1>
                </div>

                <div className={styles.line2}>
                </div>

                <div className={styles.line3}>
                </div>

                <div className={styles.line4}>
                </div>

            </div>

            <div className={styles.tabBuf3}>
                <header className={styles.headerBuf}>
                    <h1>
                        buffer 
                    </h1>
                </header>
            </div>


    








        </div>
    )



}

export default Gestao
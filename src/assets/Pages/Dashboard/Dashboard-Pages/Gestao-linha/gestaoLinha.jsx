import MenuPrincipal from "../../../../Components/Menus/menuPrincipal"
import Dashboard from "../../dashboard"
import styles from '../../Dashboard-Pages/Gestao-linha/gestao.module.css'
import { useState } from 'react';



function Gestao(){

    const [botao1_aberto, setboato1_aberto] = useState(true);

    const abreMenu1 = () => {
        setboato1_aberto(!botao1_aberto);
    };

    return(

        <>
        <MenuPrincipal/>
        <Dashboard/>
        <header className={styles.header}>
            <h1 className={styles.titulo}>
                Gestão de linha
            </h1>

        </header>
       
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Temperatura:
                    </h1>
                    <h1 className={styles.card_text}>
                        Tempo carga:
                    </h1>
                    <h1 className={styles.card_text}>
                        Info:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
               <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Temperatura:
                    </h1>
                    <h1 className={styles.card_text}>
                        Tempo carga:
                    </h1>
                    <h1 className={styles.card_text}>
                        Info:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
               <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Temperatura:
                    </h1>
                    <h1 className={styles.card_text}>
                        Tempo carga:
                    </h1>
                    <h1 className={styles.card_text}>
                        Info:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
                  <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Tecnico:
                    </h1>
                    <h1 className={styles.card_text}>
                        OF:
                    </h1>
                    <h1 className={styles.card_text}>
                        SN:
                    </h1>
                </div>
              <div className={styles.card}>
                    <h1 className={styles.card_text}>
                        Temperatura:
                    </h1>
                    <h1 className={styles.card_text}>
                        Tempo carga:
                    </h1>
                    <h1 className={styles.card_text}>
                        Info:
                    </h1>
                </div>
            
            </div>

            <div className={styles.lines}>
                <asside className={styles.line}>
                    <h1>
                        1
                    </h1>
                      <h1>
                        2
                    </h1>
                      <h1>
                        3
                    </h1>
                      <h1>
                        4
                    </h1>
                </asside>
            </div>













            {/*
            {botao1_aberto && (
                <div className={styles.test}>
                    <h1>
                        Botão 1
                    </h1>

                </div>
            )}

            <div className={styles.Menu}>
                <nav className={styles.Nav}>

                       <button 
                        className={styles.btn}
                        onClick={abreMenu1}
                    >
                        {botao1_aberto ? 'Fechar Menu' : 'Abrir Menu'}
                    </button>
                </nav>

            </div>
        
            */}
        </>
    )



}

export default Gestao
import { useState } from 'react';
import Dashboard from "../../../Dashboard/dashboard"
import MenuPrincipal from '../../../../Components/Menus/menuPrincipal'
import styles from '../Planeamento/planeamento.module.css'
import { MdInput } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { HiH3 } from 'react-icons/hi2';





function Planeamento(){
    const [botao1_aberto, setbotao1_aberto] = useState(false);
    const [botao2_aberto, setbotao2_aberto] = useState(false);
    const [botao3_aberto, setbotao3_aberto] = useState(false);

    const abreMenu1 = () => {
    setbotao1_aberto(!botao1_aberto);
    if (!botao1_aberto) { 
        setbotao2_aberto(false);
        setbotao3_aberto(false);  
        }
    };

    const abreMenu2 = () => {
        setbotao2_aberto(!botao2_aberto);
        if (!botao2_aberto) {  
            setbotao1_aberto(false);
            setbotao3_aberto(false);  
        }
    };

    const abreMenu3 = () => {
        setbotao3_aberto(!botao3_aberto);
        if (!botao3_aberto) {  
            setbotao1_aberto(false);
            setbotao2_aberto(false);
        }
    };


    const [botao4_aberto, setbotao4_aberto] = useState(false);
    const [botao5_aberto, setbotao5_aberto] = useState(false);
    const [botao6_aberto, setbotao6_aberto] = useState(false);

    const abreMenu4 = () => {
    setbotao4_aberto(!botao4_aberto);
    if (!botao4_aberto) { 
        setbotao5_aberto(false);
        setbotao6_aberto(false);  
        }
    };

    const abreMenu5 = () => {
        setbotao5_aberto(!botao5_aberto);
        if (!botao5_aberto) {  
            setbotao4_aberto(false);
            setbotao6_aberto(false);  
        }
    };

    const abreMenu6 = () => {
        setbotao6_aberto(!botao6_aberto);
        if (!botao6_aberto) {  
            setbotao4_aberto(false);
            setbotao5_aberto(false);
        }
    };




    const [botao7_aberto, setbotao7_aberto] = useState(false);
    const [botao8_aberto, setbotao8_aberto] = useState(false);
    const [botao9_aberto, setbotao9_aberto] = useState(false);

    const abreMenu7 = () => {
    setbotao7_aberto(!botao7_aberto);
    if (!botao7_aberto) { 
        setbotao8_aberto(false);
        setbotao9_aberto(false);  
        }
    };

    const abreMenu8 = () => {
        setbotao8_aberto(!botao8_aberto);
        if (!botao8_aberto) {  
            setbotao7_aberto(false);
            setbotao9_aberto(false);  
        }
    };

    const abreMenu9 = () => {
        setbotao9_aberto(!botao9_aberto);
        if (!botao9_aberto) {  
            setbotao7_aberto(false);
            setbotao8_aberto(false);
        }
    };










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
                <div>
                    <h3 className={styles.titulo}>
                        Configurações
                    </h3>
                </div>
                           
                <div className={styles.content}>
                    {botao1_aberto && (
                    <div className={styles.listaDados}>
                        <span className={styles.item}>OF1045-10</span>
                        <span className={styles.item}>OF1547-78</span>
                        <span className={styles.item}>OF7485-145</span>
                    </div> 
                    )}

                    {botao2_aberto && (
                    <div className={styles.listaDados2}>
                        <span className={styles.item2}>OF945-70</span>
                        <span className={styles.item2}>OF8547-08</span>
                        <span className={styles.item2}>OF1020-10</span>
                        <span className={styles.item2}>OF1010-08</span>
                        <span className={styles.item2}>OF1040-10</span>
                    </div> 
                    )}

                    {botao3_aberto && (
                    <div className={styles.listaDados3}>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                1
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                2
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                3
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                           <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                4
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                    </div>
                    )}
                  
                    <div className={styles.Tag_1}>
                        <label className={styles.label}>
                            <MdInput />
                        </label>
                        <p className={styles.pBtn} onClick={abreMenu1}>
                            5
                        </p>
                    </div>

                    <div className={styles.Tag_2}>
                        <label className={styles.label}>
                            tested eq.
                        </label>
                        <p className={styles.pBtn} onClick={abreMenu2}>
                            10
                        </p>
                    </div>

                    <div className={styles.Tag_3}>
                        <label className={styles.label}>
                            tech. at the stations
                        </label>
                        <p className={styles.p}>
                            2
                        </p>
                    </div>
                </div>
                <div className={styles.arrowDown}>
                    <HiChevronDown  size={25} onClick={abreMenu3}/>
                </div>                        
            </div>

            <div className={styles.plcard}>
                  <h3 className={styles.titulo}>
                        Funcional
                    </h3>
                    <div className={styles.content}>
                        {botao4_aberto && (
                        <div className={styles.listaDados}>
                            <span className={styles.item}>OF1045-10</span>
                            <span className={styles.item}>OF1547-78</span>
                            <span className={styles.item}>OF7485-145</span>
                        </div> 
                        )}

                        {botao5_aberto && (
                        <div className={styles.listaDados2}>
                            <span className={styles.item2}>OF945-70</span>
                            <span className={styles.item2}>OF8547-08</span>
                            <span className={styles.item2}>OF1020-10</span>
                            <span className={styles.item2}>OF1010-08</span>
                            <span className={styles.item2}>OF1040-10</span>
                        </div> 
                        )}
                        
                        {botao6_aberto && (
                        <div className={styles.listaDados3}>
                            <div className={styles.card}>
                                <h1 className={styles.card_titulo}>
                                    1
                                </h1>
                                <h3 className={styles.card_text}>
                                    Tecnico:
                                </h3>
                                <h1 className={styles.card_text}>
                                    OF:
                                </h1>
                                <h1 className={styles.card_text}>
                                    SN:
                                </h1>
                            </div>
                        <div className={styles.card}>
                                <h1 className={styles.card_titulo}>
                                    2
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                3
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                           <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                4
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                    </div>
                    )}
                        <div className={styles.Tag_1}>
                            <label className={styles.label}>
                             <MdInput />
                            </label>
                            <p className={styles.pBtn} onClick={abreMenu4}>
                                12
                            </p>
                        </div>

                        <div className={styles.Tag_2}>
                        <label className={styles.label} >
                            tested eq.
                        </label>
                        <p className={styles.pBtn} onClick={abreMenu5}>
                            7
                        </p>
                    </div>

                    <div className={styles.Tag_3}>
                        <label className={styles.label}>
                            tech. at the stations
                        </label>
                        <p className={styles.p}>
                            1
                        </p>
                    </div>
                  
                </div>
                  <div className={styles.arrowDown}>
                        <HiChevronDown  size={25} onClick={abreMenu6}/>
                    </div>
            </div>

            <div className={styles.plcard}>
                  <h3 className={styles.titulo}>
                        Cargas
                    </h3>
                <div className={styles.content}>
                {botao7_aberto && (
                <div className={styles.listaDados}>
                        <span className={styles.item}>OF1045-10</span>
                        <span className={styles.item}>OF1547-78</span>
                        <span className={styles.item}>OF7485-145</span>
                </div> 
                )}

                        {botao8_aberto && (
                        <div className={styles.listaDados2}>
                            <span className={styles.item2}>OF945-70</span>
                            <span className={styles.item2}>OF8547-08</span>
                            <span className={styles.item2}>OF1020-10</span>
                            <span className={styles.item2}>OF1010-08</span>
                            <span className={styles.item2}>OF1040-10</span>
                        </div> 
                        )}

                    {botao9_aberto && (
                    <div className={styles.listaDados3}>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                1
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                2
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                3
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                           <div className={styles.card}>
                            <h1 className={styles.card_titulo}>
                                4
                            </h1>
                            <h3 className={styles.card_text}>
                                Tecnico:
                            </h3>
                            <h1 className={styles.card_text}>
                                OF:
                            </h1>
                            <h1 className={styles.card_text}>
                                SN:
                            </h1>
                        </div>
                    </div>
                    )}

                    <div className={styles.Tag_1}>
                        <label className={styles.label}>
                            <MdInput />
                        </label>
                        <p className={styles.pBtn} onClick={abreMenu7}>
                            4
                        </p>
                    </div>

                    <div className={styles.Tag_2}>
                        <label className={styles.label} >
                            tested eq.
                        </label>
                        <p className={styles.pBtn} onClick={abreMenu8}>
                            5
                        </p>
                    </div>

                    <div className={styles.Tag_3}>
                        <label className={styles.label}>
                            tech. at the stations
                        </label>
                        <p className={styles.p}>
                            1
                        </p>
                    </div>
                 
                </div>
            
                <div className={styles.arrowDown}>
                        <HiChevronDown  size={25} onClick={abreMenu9}/>
                </div>
            </div>
        </div>

   


        <div className={styles.tabela}>

        </div>
    
        


        </>
    )
}

export default Planeamento
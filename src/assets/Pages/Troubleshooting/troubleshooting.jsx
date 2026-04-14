import { Link } from 'react-router-dom';
import { useState } from 'react'; // Adicionar import
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../Troubleshooting/troubleshooting.module.css'
import { IoChevronBack } from "react-icons/io5";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { MdOutlineTextsms } from "react-icons/md";
import { LuFileInput } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";



function Troubleshooting(){

    const [artigoAberto, setartigoAberto] = useState(false);
    const [relatorioAberto, setrelatorioAberto] = useState(false); 
    const [graficosAberto, setgraficosAberto] = useState(false); 

    return(
        <>
        <MenuPrincipal/>
        <div className={styles.tsMenu} >
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

                    <a href='https://icharging-my.sharepoint.com/personal/eduardo_moreira_i-charging_pt/Lists/TESTE%20NC00fe2333b7a94096a80fa0b8f5ed47bd/AllItems.aspx?CT=1754302397758&OR=OWA-NT-Mail&CID=2662f5a2-39ea-e063-99c0-be6543a5ea62&e=3%3A5f758d71129545aeacce35bbd164dead&sharingv2=true&fromShare=true&at=9' 
                        className={styles.tsLink} target="_blank" rel="noopener noreferrer">
                        <HiArrowDownOnSquare  className={styles.tsIcon} />
                        <span>NC Formulário </span>
                    </a>

                    <a href="https://icharging.sharepoint.com/sites/internalchannel/P%26P/Lists/NC%20materials%202026/AllItems.aspx" 
                        className={styles.tsLink} target="_blank" rel="noopener noreferrer">
                        <MdOutlineTextsms  className={styles.tsIcon} />
                        <span>NC Comentário </span>
                    </a>

                    <div className={styles.containerDropdown} 
                        onMouseEnter={() => setartigoAberto(true)} 
                        onMouseLeave={() => setartigoAberto(false)}>

                        <Link to="#" className={styles.tsLink}>
                            <LuFileInput  className={styles.tsIcon} />
                            <span>Inserir artigo </span>
                        </Link>

                        {artigoAberto && (
                            <div className={styles.drodown}>

                                <Link to="#" className={styles.dropdownItem}>
                                    Inserir artigo
                                </Link>

                                <Link to="#" className={styles.dropdownItem}>
                                    Listar artigos
                                </Link>

                                <Link to="#" className={styles.dropdownItem}>
                                    Procurar artigo
                                </Link>

                            </div>
                        )}
                    </div>

                    <div className={styles.containerDropdown} 
                        onMouseEnter={() => setrelatorioAberto(true)} 
                        onMouseLeave={() => setrelatorioAberto(false)}>

                        <Link to="#" className={styles.tsLink}>
                            <TbReportAnalytics  className={styles.tsIcon} />
                            <span>Relatório </span>
                        </Link>

                        {relatorioAberto && (
                            <div className={styles.drodown}>

                                <Link to="#" className={styles.dropdownItem}>
                                    Novo relatório
                                </Link>

                                <Link to="#" className={styles.dropdownItem}>
                                    Pesquisar relatório
                                </Link>

                            </div>
                        )}
                    </div>

                    <div className={styles.containerDropdown} 
                        onMouseEnter={() => setgraficosAberto(true)} 
                        onMouseLeave={() => setgraficosAberto(false)}>

                        <Link to="#" className={styles.tsLink}>
                            <FaRegChartBar  className={styles.tsIcon} />
                            <span>Gráficos </span>
                        </Link>

                        {graficosAberto && (
                            <div className={styles.drodown}>

                                <Link to="#" className={styles.dropdownItem}>
                                    Gráficos das NC
                                </Link>

                                <Link to="#" className={styles.dropdownItem}>
                                    Gráficos totais
                                </Link>

                            </div>
                        )}
                    </div>

                </nav>
            </aside>
        </div>
        </>
    )
}

export default Troubleshooting
import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/TestReport/testReport.module.css'
import { IoChevronBack } from "react-icons/io5";
import { GiNewShoot } from "react-icons/gi";
import { GrAd } from "react-icons/gr";
import { IoIosListBox } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";



function TestReport(){
    
    return(
        <>
        <MenuPrincipal/>    
        <div className={styles.repoMenu} >
            
            <header className={styles.repoTitulo}>
                <h1>
                    Test Report
                </h1>
            </header>
            <aside>
            <nav className={styles.repoNav}>

                <Link to="/" className={styles.repoLink}>
                    <IoChevronBack  className={styles.repoIcon} />
                    <span>Home</span>
                </Link>
                
                <a href="https://icharging.sharepoint.com/sites/internalchannel/quality/Controlled%20Documentation/Test%20Report%20Serial%20Number.xlsm?d=w67e5e7dc99fc4763baf55a621e740d45" 
                    className={styles.repoLink} 
                    target="_blank" rel="noopener noreferrer">
                    <GiNewShoot className={styles.repoIcon} />
                    <span>Novo </span>
                </a>

                <a href="https://icharging.sharepoint.com/sites/internalchannel/quality/_layouts/15/Doc.aspx?sourcedoc=%7B1CAD85B5-689B-4F57-BF50-E0F5019D2EE4%7D&file=Test%20Report%20Serial%20Number%20omni-e.xlsm&action=default&mobileredirect=true&DefaultItemOpen=1" 
                    className={styles.repoLink} 
                    target="_blank" rel="noopener noreferrer">
                    <GrAd className={styles.repoIcon} />
                    <span>omni-e </span>
                </a>

                <span className={styles.span}>Consultar</span>

                <hr className={styles.line}></hr>

                <a href="https://icharging.sharepoint.com/sites/internalchannel/P&P/VQ%20Tests%202025/Forms/AllItems.aspx?as=json" 
                    className={styles.repoLink} 
                    target="_blank" rel="noopener noreferrer">
                    <IoIosListBox  className={styles.repoIcon} />
                    <span>Test Report 2025 </span>
                </a>

                   <a href="https://icharging.sharepoint.com/sites/internalchannel/P%26P/VQ%20Tests%202026/Forms/AllItems.aspx" 
                    className={styles.repoLink} 
                    target="_blank" rel="noopener noreferrer">
                    <IoListSharp  className={styles.repoIcon} />
                    <span>Test Report 2026 </span>
                </a>

                </nav>
                </aside>                
            </div>

        <div className={styles.proContainer}>

        </div>       
        </>   
    )
}

export default TestReport
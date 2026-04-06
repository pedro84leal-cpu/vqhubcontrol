import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/WebLinks/Web.module.css'
import { IoChevronBack } from "react-icons/io5";
import { IoIosCloudUpload } from "react-icons/io";
import { BsSim } from "react-icons/bs";
import { RiRouterFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineGateway } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { FaTeeth } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Menu_Ecog from '../WebLinks/MenuEcog'
import { useState } from 'react';
import { useMenu } from '../../../contexts/MenuContext';


function Web(){

    const { larguras, posicoes } = useMenu();

    const [menu_ecog_Aberto , setmenu_ecog_Aberto ] = useState(false)
  
    const abre_menu_ecog_Aberto  = () => {
    setmenu_ecog_Aberto (!menu_ecog_Aberto ) 
  }

    return(
        <>
        <div className={styles.webContainer}>
        <MenuPrincipal/>
        <div className={styles.webMenu} style={{
                left: `${posicoes.submenu1}px`,
                width: `${larguras.submenu1Fixo}px`
            }}>
            <header className={styles.webTitulo}>
                <h1>
                    Web link's
                </h1>
            </header>
            <aside>
            <nav className={styles.webNav}>

                <Link to="/" className={styles.webLink}>
                    <IoChevronBack  className={styles.webIcon} />
                </Link>

                <a href="https://my.i-charging.pt/en/equipments" className={styles.webLink} 
                    target="_blank" rel="noopener noreferrer">
                    <IoIosCloudUpload className={styles.webIcon} />
                    <span>my.i-charging </span>
                </a>

                <a href="https://www.m2miportal.com/Account/Login.aspx?ReturnUrl=%2FCustomAPI%2FSIMAction.aspx" 
                        className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <BsSim className={styles.webIcon} />
                    <span>SIM action </span>
                </a>

                  <a href="https://www.mypayter.com/#/login" 
                        className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <RiSecurePaymentFill className={styles.webIcon} />
                    <span>My Payter </span>
                </a>

                  <a href="http://192.168.100.1" className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <RiRouterFill  className={styles.webIcon} />
                    <span>Router </span>
                </a>

                  <a href="http://192.168.100.1" className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <AiOutlineGateway className={styles.webIcon} />
                    <span>Gateway </span>
                </a>

                  <a href="https://www.nayax.com/" className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <FaNairaSign className={styles.webIcon} />
                    <span>Nayax </span>
                </a>

                <a href="#" className={`${styles.webLink} ${menu_ecog_Aberto ? styles.menuAberto : ''}`}
                    onClick={(e) => {e.preventDefault(); abre_menu_ecog_Aberto();}}>
                    <FaCodeCompare className={styles.webIcon} />
                    <span>Ecog <MdKeyboardArrowRight size={22} color='white' /></span>
                </a>

                <a href="#" 
                        className={styles.webLink} 
                        target="_blank" rel="noopener noreferrer">
                    <FaTeeth className={styles.webIcon} />
                    <span>Switch</span>
                </a>

          
                <Menu_Ecog menu_ecog_Aberto={menu_ecog_Aberto} />
                </nav>
                </aside>                
            </div>
        </div>       
        </>   
    )
}

export default Web
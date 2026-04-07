import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Ferramentas/ferramentas.module.css'
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




function Ferramentas(){


    const abrirPrograma = async () => {
    // Verifica se está rodando dentro do Electron
    if (window.electronAPI) {
      try {
        await window.electronAPI.abrirPrograma('C:\\Caminho\\Do\\Seu\\Programa.exe')
        console.log('Programa aberto!')
        } catch (error) {
        console.error('Erro:', error)
      }
            } else {
      console.log('Rodando no navegador - não é possível abrir programas locais')
        }
    }


    return(
        <>
        <div className={styles.toolContainer}>
        <MenuPrincipal/>
        <div className={styles.toolMenu} >
            <header className={styles.toolTitulo}>
                <h1>
                    Tool's
                </h1>
            </header>
            <aside>
            <nav className={styles.toolNav}>

                <Link to="/" className={styles.toolLink}>
                    <IoChevronBack  className={styles.toolIcon} />
                </Link>


       
                </nav>
                </aside>                
            </div>
        </div>       
        </>   
    )
}

export default Ferramentas
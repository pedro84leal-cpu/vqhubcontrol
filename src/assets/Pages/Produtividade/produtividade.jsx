import { useMenu } from '../../../contexts/MenuContext';
import { Link } from 'react-router-dom';
import MenuPrincipal from "../../Components/Menus/menuPrincipal"
import styles from '../../Pages/Produtividade/produtividade.module.css'
import { IoChevronBack } from "react-icons/io5";
import { GiPowerGenerator } from "react-icons/gi";
import { TbSchema } from "react-icons/tb";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { useState } from 'react';
import MenuCompAberto from './EsquemasComp/MenuComp';
import { MdKeyboardArrowRight } from "react-icons/md";
import MenuPCBAberto from './EsquemasPCB/menuPCB';
import MenuITAberto from './ITs/menuIT';



function Prodt(){
    
    const { larguras, posicoes } = useMenu();

    const [menu_comp_Aberto , setmenu_comp_Aberto ] = useState(false)
  
    const abre_comp_Aberto  = () => {
    setmenu_comp_Aberto (!menu_comp_Aberto ) 
  }

    const [menu_pcb_Aberto , setmenu_pcb_Aberto ] = useState(false)
  
    const abre_pcb_Aberto  = () => {
    setmenu_pcb_Aberto (!menu_pcb_Aberto ) 
  }

    const [menu_it_Aberto , setmenu_it_Aberto ] = useState(false)
  
    const abre_it_Aberto  = () => {
    setmenu_it_Aberto (!menu_it_Aberto ) 
  }

    return(
        <>
        <MenuPrincipal/>    
        <div className={styles.proMenu} style={{
                left: `${posicoes.submenu1}px`,
                width: `${larguras.submenu1Fixo}px`
            }}>
            
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

                <a href="#" className={`${styles.proLink} ${menu_pcb_Aberto ? styles.menuAberto : ''}`}
                        onClick={(e) => {e.preventDefault(); abre_pcb_Aberto();}}>
                        <TbSchema className={styles.proIcon} />
                        <span>Esquemas PCB's <MdKeyboardArrowRight size={22} color='white' /></span>
                </a>


                <a href="#" className={`${styles.proLink} ${menu_comp_Aberto ? styles.menuAberto : ''}`}
                        onClick={(e) => {e.preventDefault(); abre_comp_Aberto();}}>
                        <GiPowerGenerator className={styles.proIcon} />
                        <span>Esquemas Comp. <MdKeyboardArrowRight size={22} color='white' /></span>
                </a>
                
                <a href="#" className={`${styles.proLink} ${menu_it_Aberto ? styles.menuAberto : ''}`}
                        onClick={(e) => {e.preventDefault(); abre_it_Aberto();}}>
                        <MdOutlineIntegrationInstructions className={styles.proIcon} />
                        <span>Inst. de trabalho <MdKeyboardArrowRight size={22} color='white' /></span>
                </a>


                <MenuCompAberto menu_comp_Aberto={menu_comp_Aberto} />
                <MenuPCBAberto menu_pcb_Aberto={menu_pcb_Aberto} />
                <MenuITAberto menu_it_Aberto={menu_it_Aberto} />
                </nav>
                </aside>                
            </div>

        <div className={styles.proContainer}>

        </div>       
        </>   
    )
}

export default Prodt
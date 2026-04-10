import { Link } from 'react-router-dom'; 
import styles from '../Menus/menuPrincipal.module.css'
import { PiLinkSimpleBold } from "react-icons/pi";
import { MdTroubleshoot } from "react-icons/md";
import { GrVirtualMachine } from "react-icons/gr";
import { SiFastlane } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { TbReportAnalytics } from "react-icons/tb";
import { VscTools } from "react-icons/vsc";


function MenuPrincipal() {


  return (
    <>
      <div className={styles.menu}>

        <header className={styles.titulo}>
            <h1>
                VQ
            </h1>
            <p className={styles.subtitulo}>
                Hub Control
            </p>
        </header>
        
        <nav className={styles.nav}>

          <Link to="/dashboard" className={styles.link}>
            <RxDashboard className={styles.icon} />
            <span>Dashboard</span>
          </Link>

           <Link to="/test-report" className={styles.link}>
            <TbReportAnalytics className={styles.icon} />
            <span>Test Report</span>
          </Link>

          <Link to="/troubleshooting" className={styles.link}>
            <MdTroubleshoot  className={styles.icon} /> 
            <span>Troubleshooting</span>
          </Link>

          <Link to="/mirtilo-console" className={styles.link}>
            <GrVirtualMachine className={styles.icon}  />
            <span>Mirtilio console</span>
          </Link>

          <Link to="/prodt" className={styles.link}>
            <SiFastlane className={styles.icon}  />
            <span>Produtividade</span>
          </Link>

          <Link to="/web" className={styles.link}>
            <PiLinkSimpleBold className={styles.icon} /> 
            <span>Links</span>
          </Link>

          <Link to="/tools" className={styles.link}>
            <VscTools  className={styles.icon} /> 
            <span>Tools</span>
          </Link>
    
        </nav>
      </div>     
    </>
  );
}

export default MenuPrincipal;
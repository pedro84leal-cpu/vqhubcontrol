import MenuPrincipal from '../Components/Menus/menuPrincipal';
import ccsBoard from '../Images/ccs-board.jpg'
import styles from './ccsPage.module.css';
import MatrizSubMenu from './Matriz-submenu';
import MatrizErros from './MatrizErros';
import { useState } from 'react';



function CCSPage() {
    
   const [zoomLevel, setZoomLevel] = useState(1);

  const handleWheel = (e) => {
    e.preventDefault(); // Previne o scroll da página
    const delta = e.deltaY > 0 ? -0.1 : 0.1; // Roda para baixo diminui, para cima aumenta
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.5), 3)); // Limites entre 0.5x e 3x
  };

  return (
    <div className={styles.CCSContainer}>
        <MenuPrincipal/>
        <MatrizErros/>
        <MatrizSubMenu/>

          <img src={ccsBoard}  className={styles.CCSImage}
        style={{transform: `translate(-50%, -50%) scale(${zoomLevel})`,transition: 'transform 0.1s ease'}} onWheel={handleWheel} alt="CCS Board"/>   
    </div>
  );
}   
export default CCSPage;
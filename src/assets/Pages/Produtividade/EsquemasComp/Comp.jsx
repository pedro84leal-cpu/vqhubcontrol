import styles from '../../Produtividade/EsquemasComp/Comp.module.css'
import Prodt from '../../Produtividade/produtividade'
import MenuPrincipal from '../../../Components/Menus/menuPrincipal';
import { useState } from 'react';

import imagem1 from '../../../Images/comp/Bender.jpg';
import imagem2 from '../../../Images/comp/feed V.jpg';
import imagem3 from '../../../Images/comp/SV.jpg';
import imagem4 from '../../../Images/comp/SC L.jpg';
import imagem5 from '../../../Images/comp/SI.jpg';
import imagem6 from '../../../Images/comp/Feed.jpg';
import imagem7 from '../../../Images/comp/retratores.jpg';
import imagem8 from '../../../Images/comp/Vent.jpg';




function MenuComp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const imagens = [
    { id: 1, src: imagem1, titulo: 'Monitor de isolamento', descricao: 'Bender' },
    { id: 2, src: imagem2, titulo: 'Feedback sensor de tensão', descricao: '' },
    { id: 3, src: imagem3, titulo: 'Sensor de tensão', descricao: 'Alimentação' },
    { id: 4, src: imagem4, titulo: 'Leituras', descricao: 'Sensor de tensão' },
    { id: 5, src: imagem5, titulo: 'Sensor de corrente', descricao: 'Alimentação' },
    { id: 6, src: imagem6, titulo: 'Feedback sensor de corrente', descricao: '' },
    { id: 7, src: imagem7, titulo: 'Retratores', descricao: '' },
    { id: 8, src: imagem8, titulo: 'Ventiladores', descricao: '' },
  ];

  const imagensFiltradas = imagens.filter(img =>
    img.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWheel = (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoomLevel(prev => Math.min(Math.max(0.5, prev + delta), 3));
    }
  };

  const closeModal = () => {
    setZoomImage(null);
    setZoomLevel(1);
  };

  return (
    <>
      <MenuPrincipal />
      <Prodt />
      <div className={styles.pcbContainer}>
        <h1 className={styles.pcbTitulo}>
            Esquemas de componentes - Ligações
        </h1>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Pesquisar esquema..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput} />
        </div>

        <div className={styles.imagens}>
          {imagensFiltradas.map((img) => (
            <div key={img.id} className={styles.itemImagem} onClick={() => {
                setZoomImage(img);
                setZoomLevel(1);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src={img.src} alt={img.titulo} className={styles.img} />
              <span className={styles.spanInfo}>
                <strong>{img.titulo}</strong>
                <br />
                <small>{img.descricao}</small>
              </span>
            </div>
          ))}
        </div>

        {imagensFiltradas.length === 0 && (
          <div className={styles.semResultados}>
            Nenhum esquema encontrado para "{searchTerm}"
          </div>
        )}
      </div>

      {zoomImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div 
            className={styles.modalContent}
            onWheel={handleWheel}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={zoomImage.src} 
              alt={zoomImage.titulo} 
              style={{ 
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.1s ease'
              }}
            />
            <span>
              {zoomImage.titulo} | Zoom: {Math.round(zoomLevel * 100)}%
              <br />
              <small>Ctrl + Scroll para zoom</small>
            </span>
            
            {/* Botão fechar - AGORA VISÍVEL */}
            <button 
              className={styles.closeBtn} 
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuComp;
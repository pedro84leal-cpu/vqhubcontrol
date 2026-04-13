import styles from '../../Produtividade/EsquemasPCB/pcb.module.css'
import Prodt from '../../Produtividade/produtividade'
import MenuPrincipal from '../../../Components/Menus/menuPrincipal';
import { useState } from 'react';
import { FaRegFilePdf } from "react-icons/fa";

// Imagens
import imagem1 from '../../../Images/ITs/Conexões Routers.jpg';
import imagem2 from '../../../Images/ITs/Com i-Light_ring.jpg';


// PDFs
import pdf1 from '../../../Images/ITs/Print_screen.pdf';
import pdf2 from '../../../Images/ITs/SELAGEM.pdf';
import pdf3 from '../../../Images/ITs/IT_SWITCH CORTE.pdf';
import pdf4 from '../../../Images/ITs/IT_SERIAL NUMBERS.pdf';

function MenuIT() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  
  const documentos = [
  
    { id: 1, src: imagem1, titulo: 'Routers', descricao: '', tipo: 'imagem' },
    { id: 2, src: imagem2, titulo: 'I-Light', descricao: 'Comunicação - Switch Ring', tipo: 'imagem' },

    
    
    
    { id: 9, src: pdf1, titulo: 'IT - Print Screen', descricao: 'Print Screens', tipo: 'pdf' },
    { id: 10, src: pdf2, titulo: 'IT - Selagem', descricao: 'Selagem', tipo: 'pdf' },
    { id: 11, src: pdf3, titulo: 'IT - Comutador Corte', descricao: 'Comutador Corte', tipo: 'pdf' },
    { id: 12, src: pdf4, titulo: 'IT - Numeros de Série', descricao: 'Numeros de Série', tipo: 'pdf' },

  ];

  const documentosFiltrados = documentos.filter(doc =>
    doc.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (doc) => {
    if (doc.tipo === 'pdf') {
      window.open(doc.src, '_blank');
    } else {
      setZoomImage(doc);
      setZoomLevel(1);
    }
  };

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
          Instruções de trabalho
        </h1>
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Pesquisar documento..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput} 
          />
        </div>

        <div className={styles.imagens}>
          {documentosFiltrados.map((doc) => (
            <div 
              key={doc.id} 
              className={styles.itemImagem} 
              onClick={() => handleClick(doc)}
              style={{ cursor: 'pointer' }}
            >
              {doc.tipo === 'pdf' ? (
                <div className={styles.pdfIcon}>
                  <span style={{ display: 'flex', justifyContent: 'center' }}><FaRegFilePdf style={{color:'red'}} /></span>
                  <p style={{ textAlign: 'center' }}>Documento em pdf</p>
                </div>
              ) : (
                <img src={doc.src} alt={doc.titulo} className={styles.img} />
              )}
              
              <span className={styles.spanInfo}>
                <strong style={{color:'rgba(6, 49, 74, 0.8)', fontSize: '1.1rem'}}>{doc.titulo}</strong>
                <br />
                <small>{doc.descricao}</small>
                {doc.tipo === 'pdf' && (
                  <><br /><em>(Clique para abrir)</em></>
                )}
              </span>
            </div>
          ))}
        </div>

        {documentosFiltrados.length === 0 && (
          <div className={styles.semResultados}>
            Nenhum documento encontrado para "{searchTerm}"
          </div>
        )}
      </div>

      {/* Modal apenas para IMAGENS */}
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

export default MenuIT;
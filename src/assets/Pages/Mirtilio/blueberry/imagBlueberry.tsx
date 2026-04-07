import React from 'react';
import BBLigado from '../../../Images/carregadores/BB-Ligado.jpg'; 
import BBDesligado from '../../Images/carregadores/BB-desligado.jpg';



interface ImagemEstadoProps {
  estado: string;
  loading?: boolean;
}

const ImagemEstado: React.FC<ImagemEstadoProps> = ({ estado, loading = false }) => {
  const imagens: Record<string, string> = {
    ON: BBLigado,
    OFF: BBDesligado,
  };

  return (
    <img 
      src={imagens[estado] || imagens.OFF}
      style={{ 
        position: 'relative',
        width: '40vh', 
        height: '70vh',
        margin: '20px',
        opacity: loading ? 0.5 : 1,
        transition: 'opacity 0.3s'
      }}
    />
  );
};

export default ImagemEstado;
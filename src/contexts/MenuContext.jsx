// src/contexts/MenuContext.jsx
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menuPrincipalAberto, setMenuPrincipalAberto] = useState(false);
    // submenu1Aberto já não é necessário pois é fixo, mas mantemos se quiser usar depois
    
    // Larguras
    const larguraMenuPrincipalFechado = 70;
    const larguraMenuPrincipalAberto = 170;
    const larguraSubmenu1Fixo = 170;   // SEMPRE 170px
    const larguraSubmenu2Fixo = 80;    // SEMPRE 80px
    const offsetLeft = 0;
    
    // Largura atual do menu principal
    const larguraMenuPrincipalAtual = menuPrincipalAberto 
        ? larguraMenuPrincipalAberto 
        : larguraMenuPrincipalFechado;
    
    // Posições (left) de cada menu
    const posicaoMenuPrincipal = offsetLeft;                                    // 0
    const posicaoSubmenu1 = posicaoMenuPrincipal + larguraMenuPrincipalAtual;   // 0 + 70 ou 170
    const posicaoSubmenu2 = posicaoSubmenu1 + larguraSubmenu1Fixo;              // pos1 + 170
    
    return (
        <MenuContext.Provider value={{
            menuPrincipalAberto,
            setMenuPrincipalAberto,
            larguras: {
                menuPrincipalAtual: larguraMenuPrincipalAtual,
                submenu1Fixo: larguraSubmenu1Fixo,
                submenu2Fixo: larguraSubmenu2Fixo
            },
            posicoes: {
                menuPrincipal: posicaoMenuPrincipal,
                submenu1: posicaoSubmenu1,
                submenu2: posicaoSubmenu2
            }
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}
import React, { ReactNode } from "react";
import './layout.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="header">
        <div className="header_title">El buscador de libros</div>
        <div className="header_subtitle">Encuentra tu próxima aventura</div>
        </header>
      <div className="children">
      {children}
      </div>
      <footer className="footer">Proyecto desarrollador por Sergio Castellote Calero y Pau Martí Ripoll</footer>
    </div>
  );
}


export default Layout;
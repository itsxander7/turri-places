import React, { useState } from "react";

function Categories() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        ☰ Categorias
      </button>
      <ul className="menu">
        <li>Restaurantes</li>
        <li>Farmacias</li>
        <li>Aventuras</li>
        <li>Locales</li>
      </ul>
    </div>
  );
}
export default Categories;

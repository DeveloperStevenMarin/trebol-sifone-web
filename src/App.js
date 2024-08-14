import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import Login from './components/login/Login';
import { useTheme } from './components/general/themes/ThemeContext';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Submenu from './components/submenu/Submenu';
import ContentModal from './components/contentModal/ContentModal';
import { navOptions } from './data/navOptions';
import { set } from 'react-hook-form';

const authService = {
  isLoggedIn: () => {
    return false; // Cambia esto según el estado de autenticación del usuario
  },
};

function MainComponent() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [submenu, setSubmenu] = useState(null);
  const [content, setContent] = useState(null);
  const { theme } = useTheme();
  const isLoggedIn = authService.isLoggedIn();

  if (isLoggedIn) {
    //CAMBIAR PARA PROBAR
    return <Login />;
  }

  const handleNavSelect = (option, index) => {
    setActiveIndex(index);
    setSubmenu(option.submenu);
  };

  const handleSubmenuSelect = (itemLabel) => {
    setContent(itemLabel);
  };

  return (
    <div className='app-container'>
      <Header onSelect={handleSubmenuSelect} />
      <Nav
        options={navOptions}
        onSelect={handleNavSelect}
        activeIndex={activeIndex}
      />

      <div className='main'>
        {submenu && (
          <Submenu
            title={submenu.title}
            items={submenu.items}
            onSelect={handleSubmenuSelect}
          />
        )}
        <ContentModal content={content} />
      </div>
    </div>
  );
}

export default MainComponent;

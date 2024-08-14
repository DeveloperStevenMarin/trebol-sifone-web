import React from 'react';
import './ContentModal.css';
import AdministrarUsuario from '../../content/usuarios/administrarUsuario/AdministrarUsuario';
import LogUsuarios from '../../content/usuarios/logUsuarios/LogUsuarios';
import InformePermisosUsuario from '../../content/usuarios/informePermisosUsuario/InformePermisosUsuario';
import LimpiarLogUsuarios from '../../content/usuarios/limpiarLogUsuarios/LimpiarLogUsuarios';
import InformeTransaccionesUsuario from '../../content/usuarios/InformeTransaccionesUsuario/InformeTransaccionesUsuario';
const ContentModal = ({ content }) => {
  return content ? (
    <div className='content-modal'>
      <h2 className='title-content-modal'>{content}</h2>
      {content === 'Administrar Usuarios' && <AdministrarUsuario />}
      {content === 'Log de accesos' && <LogUsuarios />}
      {content === 'Informe de permisos de usuarios' && (
        <InformePermisosUsuario />
      )}
      {content === 'Limpiar Log de usuarios' && <LimpiarLogUsuarios />}
      {content === 'Informe de Transacciones Usuario' && <InformeTransaccionesUsuario />}
      <div>
        {/* Aquí puedes agregar más contenido específico para "Estudio De Créditos" */}
      </div>
      
      {/* Agrega más condiciones según sea necesario */}
    </div>
  ) : (
    <></>
  );
};

export default ContentModal;

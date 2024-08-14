import React, { useState } from 'react';
import './AdministrarUsuario.css';
import PermisosUsuario from '../permisosUsuario/PermisosUsuario';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';

const AdministrarUsuario = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    expiryDate: '',
    phone: '',
    mail: '',
    name: '',
    perfil: '',
  });

  const [showPermisos, setShowPermisos] = useState(false);
  const [userEnabledCheck, setUserEnabledCheck] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log(formData);
  };

  const handleReset = () => {
    setFormData({
      id: '',
      password: '',
      expiryDate: '',
      phone: '',
      mail: '',
      name: '',
    });
    setUserEnabledCheck(true); // Restablecer el estado del checkbox
  };

  const handleuserEnabledCheck = (event) => {
    setUserEnabledCheck(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit} className='formulario-crear-usuario'>
      <div className='form-group'>
        <label>Nombre</label>
        <input
          type='text'
          name='id'
          value={formData.id}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Contraseña</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Expira en</label>
        <input
          type='date'
          name='expiryDate'
          value={formData.expiryDate}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Nro. Celular</label>
        <input
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Correo</label>
        <input
          type='email'
          name='mail'
          value={formData.mail}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Apellidos y Nombres</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className='contenedor-btn-permisos-check-box'>
        <CustomBtn
          label={'Ver permisos de usuario'}
          color={'neutral'}
          onClick={() => setShowPermisos(!showPermisos)}
          dropdown={true}
          isOpen={showPermisos}
          size={'xl'}
        />
        <CustomBtn
          label={'Reestablecer usuario'}
          color={'neutral'}
          onClick={handleReset}
          size={'xl'}
        />
        <label htmlFor='' className='label-enabled-checkbox'>
          {'Habilitado'}
          <input
            type='checkbox'
            className='user-enabled-checkbox'
            id='userEnabledCheck'
            name='userEnabledCheck'
            value='true'
            checked={userEnabledCheck}
            onChange={handleuserEnabledCheck}
          />
        </label>
      </div>

      {showPermisos && (
        <PermisosUsuario id={formData.id} userEnabledCheck={userEnabledCheck} />
      )}

      <div className='button-group'>
        <button
          type='button'
          className='btn-content btn-cancel'
          onClick={handleReset}
        >
          Cancelar
        </button>
        <button type='submit' className='btn-content btn-save'>
          Guardar
        </button>
      </div>
    </form>
  );
};

export default AdministrarUsuario;
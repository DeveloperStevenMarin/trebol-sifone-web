import React, { useState } from 'react';
import './LimpiarLogUsuarios.css';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';

const LimpiarLogUsuarios = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la consulta
    console.log('Fechas seleccionadas:', formData);
  };

  const handleExit = () => {
    // Lógica para manejar la salida
    console.log('Salir');
  };

  return (
    <form onSubmit={handleSubmit} className='formulario-limpiar-log'>
      <div className='form-group'>
        <label>Fecha inicial</label>
        <input
          type='date'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Fecha final</label>
        <input
          type='date'
          name='endDate'
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>

      <div className='button-group'>
        <CustomBtn
          label='Salir'
          color='negative'
          onClick={handleExit}
          size='xl'
        />
        <CustomBtn label='Confirmar' color='confirm' type='submit' size='xl' />
      </div>
    </form>
  );
};

export default LimpiarLogUsuarios;

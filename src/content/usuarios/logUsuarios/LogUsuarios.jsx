import React, { useState } from 'react';
import './LogUsuarios.css';
import ResultCustomModal from '../../../components/general/resultCustomModal/ResultCustomModal';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';
import userLogExample from '../../../data/userLogExample';

const LogUsuarios = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    expiryDate: '',
    phone: '',
    mail: '',
    name: '',
    perfil: '',
  });
  const [isResultModalOpen, setResultModalOpen] = useState(false);

  const handleOpenResultModal = () => setResultModalOpen(true);
  const handleCloseResultModal = () => setResultModalOpen(false);

  const columns = [
    { label: 'Usuario', key: 'usuario' },
    { label: 'Fecha', key: 'fecha' },
    { label: 'Hora', key: 'hora' },
    { label: 'Método de ingreso', key: 'metodoIngreso' },
    { label: 'Última acción', key: 'ultimaAccion' },
    { label: 'Nombre del equipo', key: 'nombreEquipo' },
    { label: 'IP de conexión', key: 'ipConexion' },
  ];

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
  };

  return (
    <div>
      <ResultCustomModal
        isOpen={isResultModalOpen}
        onClose={handleCloseResultModal}
        content={userLogExample}
        printBtn={true}
        hasTable={true}
        tableColumns={columns}
        tableTextAlign='center'
      ></ResultCustomModal>
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
          <label>Fecha</label>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Hora</label>
          <input
            type='time'
            name='time'
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Metódo de ingreso</label>
          <input
            type='text'
            name='method'
            value={formData.method}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Última acción</label>
          <input
            type='text'
            name='process'
            value={formData.process}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Nombre del equipo</label>
          <input
            type='text'
            name='machineName'
            value={formData.machineName}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Ip de conexión</label>
          <input
            type='number'
            name='ip'
            value={formData.ip}
            onChange={handleChange}
          />
        </div>

        <div className='Log-Usuarios-btn-container'>
          <CustomBtn
            label='Cancelar'
            color='negative'
            onClick={handleReset}
            size={'s'}
          />
          <CustomBtn
            label='Consultar'
            color='confirm'
            size={'s'}
            onClick={handleOpenResultModal}
          />
        </div>
      </form>
    </div>
  );
};

export default LogUsuarios;

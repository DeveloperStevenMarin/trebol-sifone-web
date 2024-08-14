import React, { useState } from 'react';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';
import ResultCustomModal from '../../../components/general/resultCustomModal/ResultCustomModal';

const InformeTransaccionesUsuario = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
  });
  const [isResultModalOpen, setResultModalOpen] = useState(false);

  const handleOpenResultModal = () => setResultModalOpen(true);
  const handleCloseResultModal = () => setResultModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar la consulta
    handleOpenResultModal();
  };

  const handleExit = () => {
    // Lógica para manejar la salida
    console.log('Salir');
  };
  const columns = [
    { label: 'Usuario', key: 'usuario' },
    { label: 'Fecha', key: 'fecha' },
    { label: 'Hora', key: 'hora' },
    { label: 'Proceso realizado', key: 'procesoRealizado' },
    { label: 'Nombre del equipo', key: 'nombreEquipo' },
    { label: 'IP de conexión', key: 'ipConexion' },
  ];

  const exampleData = [
    {
      usuario: 'jsmith',
      fecha: '2024-08-01',
      hora: '08:30',
      procesoRealizado: 'Inicio de sesión',
      nombreEquipo: 'PC-101',
      ipConexion: '192.168.1.101',
    },
    {
      usuario: 'mjones',
      fecha: '2024-08-01',
      hora: '09:15',
      procesoRealizado: 'Actualización de perfil',
      nombreEquipo: 'PC-102',
      ipConexion: '192.168.1.102',
    },
    {
      usuario: 'bwilliams',
      fecha: '2024-08-01',
      hora: '10:00',
      procesoRealizado: 'Desconexión',
      nombreEquipo: 'PC-103',
      ipConexion: '192.168.1.103',
    },
    {
      usuario: 'tthompson',
      fecha: '2024-08-01',
      hora: '10:45',
      procesoRealizado: 'Cambio de contraseña',
      nombreEquipo: 'PC-104',
      ipConexion: '192.168.1.104',
    },
    {
      usuario: 'rlong',
      fecha: '2024-08-01',
      hora: '11:30',
      procesoRealizado: 'Acceso a informes',
      nombreEquipo: 'PC-105',
      ipConexion: '192.168.1.105',
    },
    {
      usuario: 'hdavis',
      fecha: '2024-08-01',
      hora: '12:00',
      procesoRealizado: 'Inicio de sesión',
      nombreEquipo: 'PC-106',
      ipConexion: '192.168.1.106',
    },
    {
      usuario: 'rlopez',
      fecha: '2024-08-01',
      hora: '12:45',
      procesoRealizado: 'Envío de correo',
      nombreEquipo: 'PC-107',
      ipConexion: '192.168.1.107',
    },
    {
      usuario: 'jgonzalez',
      fecha: '2024-08-01',
      hora: '13:30',
      procesoRealizado: 'Actualización de perfil',
      nombreEquipo: 'PC-108',
      ipConexion: '192.168.1.108',
    },
    {
      usuario: 'krobinson',
      fecha: '2024-08-01',
      hora: '14:15',
      procesoRealizado: 'Desconexión',
      nombreEquipo: 'PC-109',
      ipConexion: '192.168.1.109',
    },
    {
      usuario: 'hsanchez',
      fecha: '2024-08-01',
      hora: '15:00',
      procesoRealizado: 'Acceso a informes',
      nombreEquipo: 'PC-110',
      ipConexion: '192.168.1.110',
    },
    {
      usuario: 'dwhite',
      fecha: '2024-08-01',
      hora: '15:45',
      procesoRealizado: 'Cambio de contraseña',
      nombreEquipo: 'PC-111',
      ipConexion: '192.168.1.111',
    },
    {
      usuario: 'blmartin',
      fecha: '2024-08-01',
      hora: '16:30',
      procesoRealizado: 'Inicio de sesión',
      nombreEquipo: 'PC-112',
      ipConexion: '192.168.1.112',
    },
    {
      usuario: 'pwilson',
      fecha: '2024-08-01',
      hora: '17:00',
      procesoRealizado: 'Envío de correo',
      nombreEquipo: 'PC-113',
      ipConexion: '192.168.1.113',
    },
    {
      usuario: 'zgreen',
      fecha: '2024-08-01',
      hora: '17:45',
      procesoRealizado: 'Acceso a informes',
      nombreEquipo: 'PC-114',
      ipConexion: '192.168.1.114',
    },
    {
      usuario: 'mbrown',
      fecha: '2024-08-01',
      hora: '18:30',
      procesoRealizado: 'Desconexión',
      nombreEquipo: 'PC-115',
      ipConexion: '192.168.1.115',
    },
  ];

  return (
    <>
      <ResultCustomModal
        isOpen={isResultModalOpen}
        onClose={handleCloseResultModal}
        content={exampleData}
        printBtn={true}
        hasTable={true}
        tableColumns={columns}
        tableTextAlign='center'
        hasPagination={true}
      ></ResultCustomModal>
      <form onSubmit={handleSubmit} className='formulario-limpiar-log'>
        <div className='form-group'>
          <label>Usuario a consultar</label>
          <input
            type='text'
            name='user'
            value={formData.user}
            onChange={handleChange}
          />
        </div>
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
          <CustomBtn
            label='Confirmar'
            color='confirm'
            type='submit'
            size='xl'
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default InformeTransaccionesUsuario;

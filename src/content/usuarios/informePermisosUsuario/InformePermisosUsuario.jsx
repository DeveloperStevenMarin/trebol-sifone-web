import React, { useEffect, useState } from 'react';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';
import './InformePermisosUsuario.css';
import PermisosUsuario from '../permisosUsuario/PermisosUsuario';

const users = [
  { name: 'Nico', apellido: 'Cardona', id: 0 },
  { name: 'Prueba', apellido: 'uno', id: 1 },
  { name: 'Jdoe', apellido: 'wick', id: 2 },
  { name: 'John', apellido: 'Doe', id: 3 },
  { name: 'Alex', apellido: 'Vergara', id: 4 },
  { name: 'Natalia', apellido: 'Cardenas', id: 5 },
  { name: 'Maria', apellido: 'Gomez', id: 6 },
  { name: 'Carlos', apellido: 'Ruiz', id: 7 },
  { name: 'Ana', apellido: 'Lopez', id: 8 },
  { name: 'Pedro', apellido: 'Martinez', id: 9 },
  { name: 'Sofia', apellido: 'Jimenez', id: 10 },
  { name: 'Andres', apellido: 'Torres', id: 11 },
  { name: 'Laura', apellido: 'Gutierrez', id: 12 },
  { name: 'Pablo', apellido: 'Ramirez', id: 13 },
  { name: 'Lucia', apellido: 'Moreno', id: 14 },
  { name: 'Miguel', apellido: 'Sanchez', id: 15 },
  { name: 'Gabriela', apellido: 'Perez', id: 16 },
  { name: 'Diego', apellido: 'Cruz', id: 17 },
  { name: 'Isabel', apellido: 'Ortiz', id: 18 },
  { name: 'Luis', apellido: 'Hernandez', id: 19 },
];

const InformePermisosUsuario = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [animationClass, setAnimationClass] = useState('');


  useEffect(() => {
    if (selectedUser) {
      setAnimationClass('enter');
    } else {
      setAnimationClass('exit');
    }
  }, [selectedUser]);

  const handleClose = () => {
    setAnimationClass('exit');
    setTimeout(() => {
      setSelectedUser(null);
    }, 500); // Coincide con la duración de la animación de salida
  };

  return (
    <div>
      <ul className='list-user-permision'>
        {users.map((user, index) => (
          <li key={index} className='user-permision-item'>
            <CustomBtn
              onClick={() => setSelectedUser(user)}
              label={`${user.name} ${user.apellido}`}
              color={'neutral'}
              dropdown={true}
              isOpen={selectedUser && selectedUser.id === user.id}
            />
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div className={`user-permissions ${animationClass}`}>
          <div className='user-permision-details'>
            <h2>{`${selectedUser.name} ${selectedUser.apellido}`}</h2>
            <PermisosUsuario user={selectedUser} />
          </div>
          <div className='user-permissions-btn-container'>
            <CustomBtn
              label={'Cerrar'}
              onClick={handleClose}
              color={'negative'}
            />
            <CustomBtn label={'Imprimir'} color={'confirm'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InformePermisosUsuario;

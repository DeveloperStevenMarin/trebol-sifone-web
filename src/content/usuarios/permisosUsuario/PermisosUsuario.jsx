import React, { useState } from 'react';
import './PermisosUsuario.css';
import CustomTable from '../../../components/general/customTable/CustomTable';
import CustomBtn from '../../../components/general/customBtn/CustomBtn';
import permisosData from '../../../data/permisosData';
import Pagination from '../../../components/general/pagination/Pagination';

const permisosTipos = ['Visualizar', 'Modificar', 'Borrar'];

const PermisosUsuario = ({ id, userEnabledCheck }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openIndexes, setOpenIndexes] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

  // Maneja cambios en los checkboxes
  const handleChange = (permisoTitle, opcionTitle, tipoPermiso, event) => {
    const checked = event.target.checked;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [permisoTitle]: {
        ...prevOptions[permisoTitle],
        [opcionTitle]: {
          ...prevOptions[permisoTitle]?.[opcionTitle],
          [tipoPermiso]: checked,
        },
      },
    }));
  };

  // Maneja la apertura y cierre de los acordeones
  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
      setIsTableVisible(false); // Ocultar la tabla si el acordeón se cierra
    } else {
      setOpenIndexes([...openIndexes, index]);
      setIsTableVisible(true); // Mostrar la tabla si se abre el acordeón
    }
  };

  return (
    <div className='container-user-permision-btns'>
      {permisosData.map((permiso, index) => (
        <div key={index} className='accordion'>
          <CustomBtn
            onClick={() => toggleAccordion(index)}
            label={permiso.title}
            color={'neutral'}
            dropdown={true}
            isOpen={openIndexes.includes(index)}
            size={'l'}
          />
          {openIndexes.includes(index) && (
            <>
              <Pagination
                data={permiso.opciones.map((opcion) => {
                  const permisos = permisosTipos.reduce((acc, tipo) => {
                    acc[tipo] =
                      selectedOptions[permiso.title]?.[opcion]?.[tipo] || false;
                    return acc;
                  }, {});
                  return { opcion, ...permisos };
                })}
                renderTable={(paginatedData) => (
                  <CustomTable
                    columns={[
                      { label: 'Opción', key: 'opcion' },
                      ...permisosTipos.map((tipo) => ({
                        label: tipo,
                        key: tipo,
                        type: 'checkbox',
                        checkable: userEnabledCheck,
                      })),
                    ]}
                    data={paginatedData}
                    checkable={true}
                    isVisible={isTableVisible}
                    onCheckChange={(rowIndex, columnKey) =>
                      handleChange(
                        permiso.title,
                        permiso.opciones[rowIndex],
                        columnKey,
                        {
                          target: {
                            checked:
                              !selectedOptions[permiso.title]?.[
                                permiso.opciones[rowIndex]
                              ]?.[columnKey],
                          },
                        }
                      )
                    }
                  />
                )}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PermisosUsuario;

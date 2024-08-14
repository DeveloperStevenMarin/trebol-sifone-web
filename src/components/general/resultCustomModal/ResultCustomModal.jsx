import React, { useState } from 'react';
import './ResultCustomModal.css';
import { BiSolidXCircle } from 'react-icons/bi';
import CustomTable from '../customTable/CustomTable';
import CustomBtn from '../customBtn/CustomBtn';
import Pagination from '../pagination/Pagination';

const ResultCustomModal = ({
  isOpen,
  onClose,
  printBtn,
  confirmBtn,
  cancelBtn,
  hasTable,
  tableColumns,
  tableTextAlign,
  content,
  onClick,
  hasPagination,
}) => {
  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <div className='ResultModal-overlay'>
      <div className='ResultModal-content'>
        <button className='ResultModal-closeBtn' onClick={onClose}>
          <BiSolidXCircle />
        </button>

        {hasTable && (
          <div className='ResultModal-table-container'>
            {hasPagination ? (
              <Pagination
                data={content}
                renderTable={(paginatedData) => (
                  <CustomTable
                    columns={tableColumns}
                    data={paginatedData}
                    isVisible={true}
                    textAlign={tableTextAlign}
                  />
                )}
              />
            ) : (
              <CustomTable
                columns={tableColumns}
                data={content}
                isVisible={true}
                textAlign={tableTextAlign}
              />
            )}

            {printBtn && (
              <div className='ResultModal-btn-container'>
                <CustomBtn label='Imprimir' color='confirm' />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCustomModal;

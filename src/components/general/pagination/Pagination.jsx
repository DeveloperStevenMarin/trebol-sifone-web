import React, { useState, useEffect } from 'react';
import './Pagination.css';

const Pagination = ({
  data,
  itemsPerPageOptions = [10, 30, 50, 100],
  defaultItemsPerPage = 10,
  renderTable, // Esta función se usa para renderizar la tabla con los datos paginados
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / itemsPerPage)
  );
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    setPaginatedData(data.slice(startIndex, startIndex + itemsPerPage));
  }, [data, currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to page 1 when items per page changes
  };

  return (
    <div>
      {renderTable(paginatedData)} {/* Renderiza la tabla con los datos paginados */}

      <div className='pagination'>
        <div className='items-per-page'>
          <label>Items por página: </label>
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            {itemsPerPageOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='page-controls'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
import React from 'react';
import './CustomTable.css';

const CustomTable = ({
  columns,
  data,
  checkable = false,
  onCheckChange,
  textAlign = 'left',
}) => {
  return (
    <table className='custom-table'>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label || column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='tr-custom-table'>
            {columns.map((column, colIndex) => (
              <td
                style={{ textAlign: textAlign }}
                key={colIndex}
                className={
                  column.type === 'checkbox'
                    ? 'td-checkbox-permisions'
                    : 'td-text'
                }
              >
                {column.type === 'checkbox' ? (
                  <input
                    className='permisions-checkbox'
                    type='checkbox'
                    checked={!!row[column.key]}
                    disabled={!checkable || !column.checkable}
                    onChange={() =>
                      onCheckChange && onCheckChange(rowIndex, column.key)
                    }
                  />
                ) : (
                  row[column.key || column]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;

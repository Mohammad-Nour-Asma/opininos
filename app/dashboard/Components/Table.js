import React from "react";

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white">
        <thead className="bg-gray-100 text-[#71778E]">
          <tr>
            {columns?.map((item, index) => (
              <th
                key={index}
                className="py-3 px-6 text-center text-sm font-semibold tracking-wider"
              >
                {item.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center border-b border-gray-200">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-3 px-6 text-sm">
                  {column.cell ? column.cell(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

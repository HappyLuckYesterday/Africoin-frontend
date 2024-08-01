import React from 'react';
import { RowData } from './types';
import { DotLoader } from 'react-spinners';

interface TableProps {
  rows: RowData[];
  sortConfig: { key: string; direction: 'ascending' | 'descending' | null };
  onSort: (key: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (row: RowData) => void;
  onEdit: (row: RowData) => void;
}

const Table: React.FC<TableProps> = ({
  rows,
  sortConfig,
  onSort,
  onDelete,
  onUpdate,
  onEdit,
}) => {
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {/* <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => onSort('id')}
          >
            ID
            {sortConfig && sortConfig.key === 'id' && (
              <span className={`ml-1 ${sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down'}`} />
            )}
          </th> */}
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => onSort('title')}
          >
            Title
            {sortConfig && sortConfig.key === 'title' && (
              <span className={`ml-1 ${sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down'}`} />
            )}
          </th>
          <th
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
            onClick={() => onSort('title')}
          >
            Body
            {sortConfig && sortConfig.key === 'name' && (
              <span className={`ml-1 ${sortConfig.direction === 'ascending' ? 'arrow-up' : 'arrow-down'}`} />
            )}
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.length == 0 && 
          <td colSpan={3} className="py-10">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <DotLoader />
              <p className="text-2xl mt-4">Loading...</p>
            </div>
          </td>
        }
        {rows.map((row) => (
          <tr key={row._id} className="hover:bg-gray-100">
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-left font-medium text-gray-900">{row._id}</td> */}
            <td className="px-6 py-4 text-sm text-left text-gray-500 min-w-sm">{row.title}</td>
            <td className="px-6 py-4 text-sm text-left text-gray-500 min-w-md">{row.body}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-left font-medium flex space-x-2">
              <button
                onClick={() => onEdit(row)}
                className="text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(row._id)}
                className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

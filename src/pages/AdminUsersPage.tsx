// DataTable.tsx
import React, { useState, useEffect } from 'react';
import Table from '../components/Table/User/Table';
import Pagination from '../components/Table/User/Pagination';
import Modal from '../components/Table/User/Modal';
import { RowData } from '../components/Table/User/types';
import { fetchData, addRow, updateRow, deleteRow } from '../components/Table/User/api';

const AdminUserPage: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([]);
  const [filteredRows, setFilteredRows] = useState<RowData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'ascending' | 'descending' | null }>({ key: '', direction: null });
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<RowData | null>(null);

  const refreshRows = () => {
    console.log("rows: ", rows);
    const filteredRows = rows.filter(row =>
      Object.values(row).some(value => value.toString().toLowerCase().includes(searchQuery.toLowerCase())) 
    );
    if(rowsPerPage === -1) setFilteredRows(filteredRows);
    else {
      const pageRows = filteredRows.slice(
        (currentPage - 1) * rowsPerPage,
        (currentPage - 1) * rowsPerPage + rowsPerPage
      );
      setFilteredRows(pageRows);
    }
  }

  useEffect(() => {
    fetchData().then(data => setRows(data)); // Fetch initial data from server
  }, []);

  // Functions for handling pagination, sorting, searching
  useEffect(() => {
    refreshRows();
  }, [rows, currentPage, rowsPerPage, sortConfig, searchQuery]);

  const handleSort = (key: string) => {
    let direction: 'ascending' | 'descending' | null = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
      direction = null;
    }
    setSortConfig({ key, direction });
  };

  const handleAddRow = async (newRow: RowData) => {
    try {
      const addedRow = await addRow(newRow);
      setRows([...rows, addedRow]);
      setShowModal(false);
      setModalData(null);
    } catch (error) {
      console.error('Error adding row:', error);
    }
  };

  const handleUpdateRow = async (updatedRow: RowData) => {
    try {
      const updated = await updateRow(updatedRow);
      setRows(rows.map(row => (row._id === updated._id ? updated : row)));
      setShowModal(false);
      setModalData(null);
    } catch (error) {
      console.error('Error updating row:', error);
    }
  };

  const handleDeleteRow = async (id: string) => {
    try {
      await deleteRow(id);
      setRows(rows.filter(row => row._id !== id));
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };
  
  return (
    <div className='mx-10'>
      <div>
        <h1 className='text-[48px]'>User Table</h1>
      </div>
      <div className='flex'>
        <button className='justify-end px-4 py-2 border border-gray-300 text-sm font-medium rounded-md transition bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        onClick={() => setShowModal(true)}
      > Add </button>
      </div>
      <Table
        rows={filteredRows}
        sortConfig={sortConfig}
        onSort={handleSort}
        onDelete={handleDeleteRow}
        onUpdate={handleUpdateRow}
        onEdit={(rowData) => {
          setModalData(rowData);
          setShowModal(true);
        }}
      />
      <Pagination
        totalRows={rows.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
      <Modal
        isOpen={showModal}
        onClose={() => {setShowModal(false); setModalData(null);}}
        onSubmit={modalData ? handleUpdateRow : handleAddRow}
        initialData={modalData}
      />
    </div>
  );
};

export default AdminUserPage;

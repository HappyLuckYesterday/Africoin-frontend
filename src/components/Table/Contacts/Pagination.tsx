import React from 'react';

interface PaginationProps {
  totalRows: number;
  rowsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalRows,
  rowsPerPage,
  currentPage,
  onPageChange,
  setRowsPerPage,
}) => {
  const totalPages = rowsPerPage === -1 ? 1 : Math.ceil(totalRows / rowsPerPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(Number(event.target.value));
    setRowsPerPage(Number(event.target.value));
    onPageChange(1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const pageRange = [];
  for (let i = 1; i <= totalPages; i++) {
    pageRange.push(i);
  }

  const rowsPerPageOptions = [
    {key: "5", value: 5},
    {key: "10", value: 10},
    {key: "20", value: 20},
    {key: "50", value: 50},
    {key: "all", value: -1}
  ]
  return (
    <nav className="bg-white px-4 py-3 flex flex-wrap items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="text-sm text-gray-700 sm:flex items-center mr-10 mt-5">
        <label htmlFor="rows-per-page" className="mr-2">
          Rows per page:
        </label>
        <select
          id="rows-per-page"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {rowsPerPageOptions.map(option => (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <p>{(currentPage - 1)*rowsPerPage+1} - {Math.min(currentPage*rowsPerPage, totalRows)} Total {totalRows} Rows</p>
      </div>
      <div className="flex justify-end sm:justify-end space-x-3 mt-5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md transition ${
            isFirstPage
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          }`}
        >
          Previous
        </button>
        <div className="-mt-px w-auto flex-1 flex justify-center sm:justify-end space-x-1">
          {pageRange.map((page) =>
            Math.abs(currentPage - page) <= 2 ? (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md transition ${
                  currentPage === page
                    ? 'bg-indigo-100 text-indigo-500'
                    : 'bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                }`}
              >
                {page}
              </button>
            ) : null
          )}
        </div>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md transition ${
            isLastPage
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          }`}
        >
          Next
        </button>
      </div>
    </nav>
  );
};

export default Pagination;

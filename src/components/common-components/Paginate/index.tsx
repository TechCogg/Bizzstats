import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


interface PaginateProps {
  totalCount: number; // Total number of items
  pageSize: number; // Number of items per page
  currentPage: number; // Current page
  onPageChange: (selectedPage: number) => void; // Callback for page changes
}

const Paginate: React.FC<PaginateProps> = ({ totalCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="text-sm text-gray-500">
        Showing {currentPage * pageSize - pageSize + 1} to{" "}
        {Math.min(currentPage * pageSize, totalCount)} of {totalCount} entries
      </div>
      <ReactPaginate
        previousLabel={<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />}
        nextLabel={<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
        breakLabel="..."
        onPageChange={(data) => onPageChange(data.selected + 1)} // Adjust for 0-based index
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination flex"
        pageClassName="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-100 "
        activeClassName="bg-blue-500 text-white hover:bg-blue-500"
        previousClassName="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-50"
        nextClassName="px-4 py-2 border border-gray-300 text-gray-500 hover:bg-gray-50"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Paginate;

'use client';

// usePagination.ts

import { useState } from "react";

type PaginationProps<T> = {
  items: T[];
  initialPage?: number;
  itemsPerPage?: number;
};

function usePagination<T>({ items, initialPage = 1, itemsPerPage = 10 }: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = () => {
    setCurrentPage((prevPage: number) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = items.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    itemsPerPage,
    totalPages,
    currentData,
  };
}

export default usePagination;
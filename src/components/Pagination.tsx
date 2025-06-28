import React from 'react';
import type { PaginationProps } from '../utils/types';

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;
    const pages: number[] = [];
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <nav className="flex justify-center items-center gap-2 mt-10" aria-label="Pagination Navigation">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 px-0 py-0 rounded-full border border-primary-200 bg-white text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Previous Page"
            >
                &lt;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 px-0 py-0 rounded-full border transition-colors duration-150 focus:ring-2 focus:ring-primary-300 flex items-center justify-center ${currentPage === page
                        ? 'bg-black text-white border-black font-bold shadow'
                        : 'bg-white text-primary-700 border-primary-200 hover:bg-primary-50'
                        }`}
                    aria-current={currentPage === page ? 'page' : undefined}
                    aria-label={`Page ${page}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 px-0 py-0 rounded-full border border-primary-200 bg-white text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Next Page"
            >
                &gt;
            </button>
        </nav>
    );
};

export default Pagination;

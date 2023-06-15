// import React from 'react';
// import style from '../homeCountry/home.module.css';

// export const Pagination = ({ currentPage, totalPages, paginate }) => {
//   const maxDisplayedPages = 5;

//   const renderPageNumbers = () => {
//     const middlePage = Math.floor(maxDisplayedPages / 2);
//     const pageNumbers = [];
//     let startPage;
//     let endPage;

//     if (totalPages <= maxDisplayedPages) {
//       startPage = 1;
//       endPage = totalPages;
//     } else if (currentPage <= middlePage) {
//       startPage = 1;
//       endPage = maxDisplayedPages;
//     } else if (currentPage + middlePage >= totalPages) {
//       startPage = totalPages - maxDisplayedPages + 1;
//       endPage = totalPages;
//     } else {
//       startPage = currentPage - middlePage;
//       endPage = currentPage + middlePage;
//     }

//     for (let page = startPage; page <= endPage; page++) {
//       pageNumbers.push(
//         <button
//           className={`${style.btn} ${currentPage === page ? style.active : ''}`}
//           key={page}
//           onClick={() => paginate(page)}
//         >
//           {page}
//         </button>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <div className={style.pagination}>
//       {currentPage > 1 && (
//         <button className={style.btn} onClick={() => paginate(currentPage - 1)}>
//           ⬅
//         </button>
//       )}

//       {renderPageNumbers()}

//       {currentPage < totalPages && (
//         <button className={style.btn} onClick={() => paginate(currentPage + 1)}>
//           ➡
//         </button>
//       )}
//     </div>
//   );
// };

// // export default Pagination;

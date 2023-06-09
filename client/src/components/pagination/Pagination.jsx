// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export const Pagination = () =>{
    
   
//       const countries = useSelector((state) => state.country.allCountries);
//       const [currentPage, setCurrentPage] = useState(1);
//       const itemsPerPage = 10; // Define el número de países por página
    
//       const totalPages = Math.ceil(countries.length / itemsPerPage);
    
//       useEffect(() => {
//         setCurrentPage(1); // Reinicia la página actual al cambiar la lista de países
//       }, [countries]);
    
//       const handleClick = (page) => {
//         setCurrentPage(page);
//       };
    
//       // Calcula el índice inicial y final de los países en la página actual
//       const startIndex = (currentPage - 1) * itemsPerPage;
//       const endIndex = startIndex + itemsPerPage;
    
//       const currentCountries = countries.slice(startIndex, endIndex);
    
//       return (
//         <div>
         
    
//           {/* Renderiza los botones de paginación */}
//           <div>
//             {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handleClick(page)}
//                 disabled={currentPage === page}
//               >
//                 {page}
//               </button>
//             ))}
//           </div>
//         </div>
//       );
//     };
    

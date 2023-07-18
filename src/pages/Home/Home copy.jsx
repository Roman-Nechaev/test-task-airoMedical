// import { useCallback, useEffect, useState } from 'react';

// import { CommonList } from '../../components/CommonList/CommonList';
// import { useStore } from '../../store';
// import { shallow } from 'zustand/shallow';

// import { Container, WrapperList } from './Home.styled';
// // import { MdOutlineInvertColorsOff } from 'react-icons/md';
// import { FixedSizeList as List } from 'react-window';

// export const Home = () => {
//   const { fetchRecipes, recipesList, loading, addPage } = useStore(
//     ({ fetchRecipes, recipesList, loading, addPage }) => ({
//       recipesList,
//       fetchRecipes,
//       loading,
//       addPage,
//     }),
//     shallow
//   );

//   const [state, setState] = useState(null);

//   const [innerHeight, setInnerHeight] = useState(null);
//   const [scrollHeight, setScrollHeight] = useState(null);
//   const [scrollTop, setScrollTop] = useState(null);

//   const [currentPage, setCurrentPage] = useState(null);

//   const [range, setRange] = useState([0, 15]);

//   const [fetching, setFetching] = useState(true);

//   useEffect(() => {
//     if (fetching) {
//       fetchRecipes(currentPage);
//       setFetching(false);
//     }
//   }, [currentPage, fetchRecipes, fetching]);

//   const scrollHandler = useCallback(e => {
//     const { scrollHeight, scrollTop, offsetHeight } = e.currentTarget;

//     setInnerHeight(offsetHeight);

//     setScrollHeight(scrollHeight);
//     setScrollTop(scrollTop);

//     // if (offsetHeight + scrollTop + 1 >= scrollHeight) {
//     //   setCurrentPage(prevState => prevState + 1);
//     //   setFetching(true);

//     //   return;
//     // }
//   }, []);

//   // useEffect(() => {
//   //   if (!scrollTop || range[0] >= 5) {
//   //     console.log(range[0], range[1]);
//   //     window.scrollTo(0, 10);

//   //     // setRange(prevRange => [prevRange[0] - 1, prevRange[1] - 1]);
//   //   }

//   //   if (innerHeight + scrollTop >= scrollHeight) {
//   //     console.log(range[0], range[1]);

//   //     setCurrentPage(prevState => prevState + 1);
//   //     setFetching(true);

//   //     // setRange(prevRange => [prevRange[0] + 1, prevRange[1] + 1]);

//   //     return;
//   //   }
//   // }, [
//   //   addPage,
//   //   fetchRecipes,
//   //   innerHeight,
//   //   range,
//   //   recipesList.length,
//   //   scrollHeight,
//   //   scrollTop,
//   // ]);

//   return (
//     <Container>
//       <>
//         <WrapperList onScroll={scrollHandler}>
//           {recipesList.map(item => (
//             <CommonList key={item.id} {...item} />
//           ))}
//         </WrapperList>
//       </>
//     </Container>
//   );
// };

// //  <WrapperList onScroll={scrollHandler}>
// //    {recipesList.map(item => (
// //      <CommonList key={item.id} {...item} />
// //    ))}
// //  </WrapperList>;

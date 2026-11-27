
// function searchEvent(query){ // api calls
//   console.log("searching...",query);
// }

import { useEffect, useState } from "react";

// function debounce(fn,delay){
//   let timer;
//   return function abc(...args){ // rest oparator
//     clearTimeout(timer);//clear previous timer

//     timer = setTimeout(()=>{ 
//       fn(...args);// spread operator
//     },delay);
//   }
// }
// const debouncedSearch = debounce(searchEvent,1000);

// debouncedSearch("r");
// debouncedSearch("re");
// debouncedSearch("rea");
// debouncedSearch("reac");
// debouncedSearch("react");

export function useDebounce(value, delay = 350) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debounceValue;
}
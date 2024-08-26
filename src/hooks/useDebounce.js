import { useRef } from 'react';

function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  const debouncedFunction = (...args) => {
    // Clear the previous timeout if it exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
}

export default useDebounce;

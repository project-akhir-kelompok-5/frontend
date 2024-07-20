import { useRef, useEffect } from 'react';

type Callback = (...args: any[]) => void;

function useDebounce(callback: Callback, delay: number) {
  const handler = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (handler.current) {
        clearTimeout(handler.current);
      }
    };
  }, []);

  return function debouncedCallback(...args: any[]) {
    if (handler.current) {
      clearTimeout(handler.current);
    }
    handler.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export default useDebounce;

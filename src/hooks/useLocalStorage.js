import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  /*state init*/
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  /*Changing local Storage data on every changes with contacts*/
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;

/* eslint-disable max-len */
import { useState, useEffect } from 'react';

export const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [recordArray, setRecordArray] = useState([init]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(recordArray.indexOf(current));
  }, [current]);
  
  const record = (newValue) => {
    setRecordArray(prevArray => [
      ...prevArray.slice(0, currentIndex + 1),
      newValue,
      ...prevArray.slice(currentIndex + 1)
    ]);
    
    setCurrent(newValue);
  };

  const undo = () => {
    setCurrent(recordArray[currentIndex - 1]);
  };

  const redo = () => {
    setCurrent(recordArray[currentIndex + 1]);
  };
  
  // console.log(recordArray);

  return {
    current,
    currentIndex,
    recordArray,
    undo,
    redo,
    record
  };
};


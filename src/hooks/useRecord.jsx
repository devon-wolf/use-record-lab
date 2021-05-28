import { useState, useEffect } from 'react';

export const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [recordArray, setRecordArray] = useState([init]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(recordArray.indexOf(current));
  }, [current]);
  
  // actually, need to insert the new value based on the CURRENT INDEX
  const record = (newValue) => {
    setRecordArray(prevArray => [...prevArray, newValue]);    
    setCurrent(newValue);
  };

  const undo = () => {
    setCurrent(recordArray[currentIndex - 1]);
  };

  const redo = () => {
    setCurrent(recordArray[currentIndex + 1]);
  };
  
  console.log(recordArray);

  return {
    current,
    currentIndex,
    recordArray,
    undo,
    redo,
    record
  };
};


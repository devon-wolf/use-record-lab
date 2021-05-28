import { useState } from 'react';

export const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const record = (newValue) => setCurrent(newValue);
	
  return {
    current,
    undo: () => {},
    redo: () => {},
    record
  };
};


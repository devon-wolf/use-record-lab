/* eslint-disable max-len */
import React from 'react';
import { useRecord } from '../hooks/useRecord';
import Box from '../components/displays/Box';
import ControlPanel from '../components/controls/ControlPanel';

const MainPage = () => {
  const { current, currentIndex, recordArray, undo, redo, record } = useRecord('#FF0000');

  const disableUndo = () => {
    return currentIndex - 1 < 0;
  };

  const disableRedo = () => {
    return currentIndex + 1 === recordArray.length; 
  };

  return (
    <div>
      
      <ControlPanel 
        handleUndo={undo}
        handleRedo={redo}
        handleColorChange={e => record(e.target.value)}
        disableUndo={disableUndo()}
        disableRedo={disableRedo()}
        current={current}
      />

      <Box 
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      />

    </div>
  );
};

export default MainPage;

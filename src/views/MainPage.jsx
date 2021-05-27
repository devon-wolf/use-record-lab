import React from 'react';
import { useRecord } from '../hooks/useRecord';
import Box from '../components/displays/Box';
import ControlPanel from '../components/controls/ControlPanel';

export const MainPage = () => {
  const { current, undo, redo, record } = useRecord('#FF0000');
  return (
    <div>
      
      
      <ControlPanel 
        handleUndo={undo}
        handleRedo={redo}
        handleColorChange={e => record(e.target.value)}
        current={current}
      />

      <Box 
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      />
      
    </div>
  );
};

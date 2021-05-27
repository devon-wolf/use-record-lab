/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ handleUndo, handleRedo, handleColorChange, current }) => {
  return (
    <>
      <button onClick={handleUndo}>undo</button>
      	<button onClick={handleRedo}>redo</button>

      <input
        type="color"
        value={current}
        onChange={handleColorChange}
      />
	  </>
  );
};

ControlPanel.propTypes = {
  handleUndo: PropTypes.func.isRequired,
  handleRedo: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
};

export default ControlPanel;

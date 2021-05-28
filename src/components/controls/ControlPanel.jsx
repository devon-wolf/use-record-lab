/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ handleUndo, handleRedo, handleColorChange, disableUndo, disableRedo, current }) => {
  return (
    <>
      <button
        aria-label="undo"
        onClick={handleUndo}
        disabled={disableUndo}
      >
          undo
      </button>
      	
      <button
        aria-label="redo"
        onClick={handleRedo}
        disabled={disableRedo}
      >
          redo
      </button>

      <input
        aria-label="color-picker"
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
  disableUndo: PropTypes.bool.isRequired,
  disableRedo: PropTypes.bool.isRequired,
  current: PropTypes.string.isRequired,
};

export default ControlPanel;

import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ style }) => {
  return (
    <div style={style} aria-label="color-display">
			
    </div>
  );
};

Box.propTypes = {
  style: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired
};

export default Box;

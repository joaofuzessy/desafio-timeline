import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
import { icons } from './iconPaths.js';

function Icon({
    path, size, color, transform, viewBox,
  }) {
    
    
    
   
    const cor = '#717171';
    const sizeDefault = size === undefined ? '21px' : size;
    const viewBoxDefault = viewBox === undefined ? "0 0 25 25" : viewBox;
    
    return (
      <svg 
        fill={cor}
        width={sizeDefault}
        height={sizeDefault}
        viewBox={viewBoxDefault}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          alignSelf: 'center',
          transform: transform || null,
        }}
      >
        <g id={path} stroke="none" strokeWidth="1" fillRule="evenodd">
          <path d={icons[path]} id="Icon" />
        </g>
      </svg>
    );
  }
  
  Icon.propTypes = {
    path: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    transform: PropTypes.string,
  };
  
  Icon.defaultProps = {
    size: '16px',
    transform: '',
    path: '',
  };
  
  export default Icon;
  
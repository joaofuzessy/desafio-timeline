import React from 'react';
import PropTypes from 'prop-types';
import './Icon.scss';
import { icons } from './iconPaths.js';

function Icon({
    path, size, color, transform, viewBox,
  }) {
    
    const getSvg = function(iconSvg, pathShowBox){
        let clipboard = document.createElement('textarea');
        let svgPath = document.createTextNode(iconSvg);
        let feedback = document.createTextNode("Copiado para a área de transferência!");
        clipboard.value = svgPath.textContent;
        pathShowBox.appendChild(clipboard);
        
        clipboard.select();
        document.execCommand('copy');
        setTimeout(function(){
          document.getElementById('feedback').appendChild(feedback);
        }, 500);
        
        setTimeout(function(){
          document.getElementById('feedback').textContent = "";
        }, 3000);
    }
    
    const copySvgPath = function(e){
      let pathShowBox = document.getElementById('pathShowBox');
      pathShowBox.innerHTML = "";
      document.getElementById('feedback').textContent = "";
      let iconSvg = e.target.getAttribute("d");
      if(iconSvg){
        getSvg(iconSvg, pathShowBox);
      }
      else{//Corrige retornar null se clicar no path
        let iconSvg = e.target.childNodes[0].childNodes[0].getAttribute("d");
        getSvg(iconSvg, pathShowBox);
      }
      
      
    }
    const cor = '#000';
    const sizeDefault = size === undefined ? '21px' : size;
    const viewBoxDefault = viewBox === undefined ? "0 0 25 25" : viewBox;
    const pointsPolygon = [
      ' 40.3090511 0.148394366 45.8425511 0.148394366 ',
      ' 45.8425511 15.683493 40.3090511 15.683493 ',
    ];
    return (
      <svg onClick={(e) => copySvgPath(e)}
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
          {path === 'logo1' ? (
            <polygon id="Fill-4" points={`${pointsPolygon[0]} ${pointsPolygon[1]}`} />
          ) : (
            false
          )}
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
  
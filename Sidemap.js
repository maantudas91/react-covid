import React from 'react';

const Sidemap = () => {
  return (
      <g className="legendLinear" transform="translate(1, 375)">
        <g className="legendCells" transform="translate(0,34.421875)">
          <g className="cell" transform="translate(0, 0)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(255, 245, 240)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">1 - 24</text>
          </g>
          <g className="cell" transform="translate(0, 19.609375)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(253, 213, 196)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">25 - 48</text>
          </g>
          <g className="cell" transform="translate(0, 39.21875)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(252, 165, 136)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">49 - 72</text>
          </g>
          <g className="cell" transform="translate(0, 58.828125)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(250, 113, 83)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">73 - 96</text>
          </g>
          <g className="cell" transform="translate(0, 78.4375)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(233, 58, 45)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">97 - 120</text>
          </g>
          <g className="cell" transform="translate(0, 98.046875)">
            <rect className="swatch" height="15" width="50" style={{fill: 'rgb(190, 22, 27)'}}></rect>
            <text className="label" transform="translate( 60, 12.5)">120+</text>
          </g>
        </g>
        <text className="legendTitle">
            <tspan x="0" dy="0em">Confirmed</tspan>
            <tspan x="0" dy="1.2em">Cases</tspan>
        </text>
      </g>
  )
}
export default Sidemap;



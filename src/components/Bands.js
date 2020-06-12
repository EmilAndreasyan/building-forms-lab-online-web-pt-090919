import React from 'react';

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index} ></li>
  })
}
export default Bands;
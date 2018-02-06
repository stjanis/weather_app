import React from 'react';
import PropTypes from 'prop-types';

const NavPane = (props) => {

  const cities = props.cities.map(
    (city, index) => 
      <li
        key={index}
        onClick={() => props.selectCity(city)}
      >
        {city}
      </li>
  );

  return (
    <div className="sidebar">
      <ul>
        {cities}
      </ul>
    </div>
  )
}

NavPane.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default NavPane;

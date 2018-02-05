import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = (props) => {

  const cities = props.cities.map(city => <li key={city}>{city}</li>);

  return (
    <div className="sidebar">
      <ul>
        {cities}
      </ul>
    </div>
  )
}

Sidebar.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Sidebar

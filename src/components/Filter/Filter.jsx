import React from 'react';
import PropTypes from 'prop-types';
import FilterStyled from './FilterStyled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterStyled>
      <label>Filter contacts by name:</label>
      <input type="text" value={value} onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

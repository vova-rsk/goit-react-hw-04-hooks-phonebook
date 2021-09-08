import React from 'react';
import PropTypes from 'prop-types';
import Label from './Filter.styled';

const Filter = ({ filter, handleChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} value={filter} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

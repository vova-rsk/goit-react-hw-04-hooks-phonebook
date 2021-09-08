import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ContactItem.styled';

const ContactItem = ({ id, name, number, contactRemoving }) => {
  return (
    <ListItem>
      <span>{`${name}: ${number}`}</span>
      <button type="button" data-id={id} onClick={() => contactRemoving(id)}>
        Delete
      </button>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  contactRemoving: PropTypes.func,
};

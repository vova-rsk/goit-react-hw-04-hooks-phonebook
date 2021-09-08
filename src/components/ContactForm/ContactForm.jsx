import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './ContactForm.styled';

const ContactForm = ({ availabilityСheck, contactAdding }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  /*function for processing a form submission*/
  const handleSubmit = e => {
    e.preventDefault();

    if (availabilityСheck(name) || !name || !number) {
      return;
    }

    contactAdding({ id: uuidv4(), name, number });
    setName('');
    setNumber('');
  };

  /*function for handling data input to input-elem*/
  const handleChange = e => {
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(e.target.value.trim());
        break;

      case 'number':
        setNumber(e.target.value.trim());
        break;

      default:
        console.log('Oops! Something Went Wrong');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        Phone number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  // handleChange: PropTypes.func.isRequired,
  availabilityСheck: PropTypes.func.isRequired,
  contactAdding: PropTypes.func.isRequired,
};

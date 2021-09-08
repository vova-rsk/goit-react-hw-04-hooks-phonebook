import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  /*method for processing a form submission*/
  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { availabilityСheck, contactAdding } = this.props;

    if (availabilityСheck(name) || !name || !number) {
      return;
    }

    contactAdding({ id: uuidv4(), name, number });
    this.setState({ name: '', number: '' });
  };

  /*method for generating markup*/
  render() {
    const { name, number } = this.state;
    const { handleChange } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange.bind(this)}
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
            onChange={handleChange.bind(this)}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  availabilityСheck: PropTypes.func.isRequired,
  contactAdding: PropTypes.func.isRequired,
};

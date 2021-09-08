import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  /*method for filtering contacts*/
  contactsFiltering = key => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(key.toLowerCase()),
    );
  };

  /*method for adding an item to contacts*/
  contactAdding = newContact => {
    this.setState(({ contacts, filter }) => ({
      contacts: [...contacts, newContact],
      filter,
    }));
  };

  /*method for removing an item from contacts*/
  contactRemoving = id => {
    this.setState(({ contacts, filter }) => {
      return {
        contacts: contacts.filter(elem => elem.id !== id),
        filter,
      };
    });
  };

  /*method for checking the presence of a contact with the specified name*/
  availabilityСheck = inputName => {
    const existingСontact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
    );

    if (existingСontact) {
      alert(`${inputName} is already in contacts`);
      return true;
    }
    return false;
  };

  /*method for handling data input to input-elem*/
  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
  }

  componentDidMount() {
    /*получение объекта с массивом контактов из localStorage в state*/
    let contacts;
    try {
      contacts = JSON.parse(localStorage.getItem('phonebook'));
    } catch (error) {
      console.log(error);
    }

    if (contacts) {
      this.setState(contacts);
    }
  }

  componentDidUpdate(prevProps, { contacts: prevContacts }) {
    /*Добавление объекта с массивом контактов в localStorage*/
    const { contacts } = this.state;

    if (prevContacts.length !== contacts.length) {
      const data = JSON.stringify({ contacts: contacts });
      localStorage.setItem('phonebook', data);
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.contactsFiltering(filter);

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          availabilityСheck={this.availabilityСheck}
          contactAdding={this.contactAdding}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.handleChange.bind(this)} />
        <ContactList
          contacts={filteredContacts}
          contactRemoving={this.contactRemoving}
        />
      </Container>
    );
  }
}

export default App;

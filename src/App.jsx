import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  /*Updating contacts from local Storage on startup*/
  useEffect(() => {
    let data;

    try {
      data = JSON.parse(localStorage.getItem('phonebook'));
    } catch (error) {
      console.log(error);
    }

    if (data.contacts) setContacts(data.contacts);
  }, []);

  /*Changing local Storage data on every changes with contacts*/
  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify({ contacts: contacts }));
  }, [contacts]);

  /*function for filtering contacts*/
  const contactsFiltering = key => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(key.toLowerCase()),
    );
  };

  /*function for adding an item to contacts*/
  const contactAdding = newContact => {
    setContacts([...contacts, newContact]);
  };

  /*function for removing an item from contacts*/
  const contactRemoving = id => {
    setContacts(contacts.filter(elem => elem.id !== id));
  };

  /*function for checking the presence of a contact with the specified name*/
  const availabilityСheck = inputName => {
    const existingСontact = contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
    );

    if (existingСontact) {
      alert(`${inputName} is already in contacts`);
      return true;
    }
    return false;
  };

  /*function for handling data input to input-elem*/
  const handleChange = e => {
    setFilter(e.target.value.trim());
  };

  const filteredContacts = contactsFiltering(filter);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        // handleChange={this.handleChange}
        availabilityСheck={availabilityСheck}
        contactAdding={contactAdding}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        contactRemoving={contactRemoving}
      />
    </Container>
  );
};

export default App;
